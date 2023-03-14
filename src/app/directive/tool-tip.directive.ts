import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appToolTip]'
})
export class ToolTipDirective {
  @Input('appToolTip') tooltipText!: string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }
  @HostListener('mouseleave') onMouseLeave(){

    this.hideTooltip();
  }
  private showTooltip() {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = `<span class="tooltip-text">${this.tooltipText}</span>`;
    this.el.nativeElement.appendChild(tooltip);
  }

  private hideTooltip() {
    const tooltip = this.el.nativeElement.querySelector('.tooltip');
    this.el.nativeElement.removeChild(tooltip);
  }

}

