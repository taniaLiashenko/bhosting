import CLASSES from '../helpers/_consts';

class Accordion {
	constructor(el) {
		this.el = el;
		this.items = Array.from(this.el.querySelectorAll('.js-accordion-inner'));
		this.activeItem = this.el.querySelector('.js-accordion-inner.is-active');
		this.activePanel = this.activeItem ? this.activeItem.querySelector('.js-panel') : null;
	}

	init() {
		this.items.forEach(item => this.initAccordionItem(item));
	}

	initAccordionItem(item) {
		const panel = item.querySelector('.js-panel');
		item.querySelector('.js-accordion').addEventListener('click', () => this.toggleAccordionItem(item, panel));
	}

	toggleAccordionItem(item, panel) {
		if (item !== this.activeItem) {
			if (this.activeItem) {
				this.activeItem.classList.remove(CLASSES.active);
			}
			this.activeItem = item;
			this.activePanel = panel;
			item.classList.add(CLASSES.active);
		} else {
			this.activeItem = null;
			this.activePanel = null;
			item.classList.remove(CLASSES.active);
		}
	}
};

const initAllAccordions = () => {
	const elements = Array.from(document.querySelectorAll('.js-accordion-wrapper'));
	elements.forEach((el) => new Accordion(el).init());
};

export default initAllAccordions;
