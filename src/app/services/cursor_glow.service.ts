import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursorGlowService {
  private cursorElement?: ElementRef;
  private mouseMoveListener: any;

  initializeCursor(cursorElement: ElementRef) {
    this.cursorElement = cursorElement;
    this.startCursorTracking();
  }

  private startCursorTracking() {
    const throttledMove = this.throttle((e: MouseEvent) => {
      if (this.cursorElement?.nativeElement) {
        requestAnimationFrame(() => {
          this.cursorElement!.nativeElement.style.left = `${e.clientX}px`;
          this.cursorElement!.nativeElement.style.top = `${e.clientY}px`;
        });
      }
    }, 16);

    this.mouseMoveListener = throttledMove;
    document.addEventListener('mousemove', this.mouseMoveListener);
  }

  cleanup() {
    if (this.mouseMoveListener) {
      document.removeEventListener('mousemove', this.mouseMoveListener);
    }
  }

  private throttle(func: Function, limit: number) {
    let inThrottle: boolean;
    return function(this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}
