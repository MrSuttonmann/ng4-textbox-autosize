import {AfterViewInit, Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
	selector: 'textarea[autosize]',
	host: {
		'rows': '1',
		'style': 'overflow: hidden'
	}
})
export class AutosizeDirective implements AfterViewInit {

	private readonly el: HTMLTextAreaElement;
	private _minHeight: string;
	private _maxHeight: string;
	private _clientWidth: number;

	@Input('minHeight')
	get minHeight(): string {
		return this._minHeight;
	}
	set minHeight(val: string) {
		this._minHeight = val;
		this.updateMinHeight();
	}

	@Input('maxHeight')
	get maxHeight(): string {
		return this._maxHeight;
	}
	set maxHeight(val: string) {
		this._maxHeight = val;
		this.updateMaxHeight();
	}

	constructor(private element: ElementRef) {
		this.el = element.nativeElement;
		this._clientWidth = this.el.clientWidth;
	}

	ngAfterViewInit(): void {
		const style = window.getComputedStyle(this.el, null);
		if (style.resize === 'both') {
			this.el.style.resize = 'horizontal';
		} else if (style.resize === 'vertical') {
			this.el.style.resize = 'none';
		}
		this.adjust();
	}

	@HostListener('input', ['$event.target'])
	onInput(textArea: HTMLTextAreaElement): void {
		this.adjust();
	}

	private adjust(): void {
		if (this.el.style.height === `${this.element.nativeElement.scrollHeight}px`)
			return;
		this.el.style.overflow = 'hidden';
		this.el.style.height = 'auto';
		this.el.style.height = `${this.el.scrollHeight}px`;
	}

	private updateMinHeight(): void {
		this.el.style.minHeight = `${this._minHeight}px`;
	}

	private updateMaxHeight(): void {
		this.el.style.maxHeight = `${this._maxHeight}px`;
	}

}
