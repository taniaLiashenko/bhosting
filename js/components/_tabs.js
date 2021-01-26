import CLASSES from '../helpers/_consts';

class Tabs {
	constructor(el) {
		this.el = el;
		this.tabBtns = Array.from(this.el.querySelectorAll('.js-tab'));
		this.tabContents = Array.from(this.el.querySelectorAll('.js-tab-text'));
		this.activeTabBtn = this.el.querySelector('.js-tab.is-active');
		this.activeTabContent = this.el.querySelector('.js-tab-text.is-active');
	}

	init() {
		this.tabBtns.forEach(tabBtn => this.initTabBtn(tabBtn));
	}

	initTabBtn(tabBtn) {
		tabBtn.addEventListener('click', () => {
			if(tabBtn !== this.activeTabBtn) {
				this.activeTabBtn.classList.remove(CLASSES.active);
				this.activeTabContent.classList.remove(CLASSES.active);
				this.activeTabBtn = tabBtn;
				const tabText = this.el.querySelector(`[name="${tabBtn.dataset.tab}"]`);
				this.activeTabContent = tabText;
				tabBtn.classList.add(CLASSES.active);
				tabText.classList.add(CLASSES.active);
			}
		});
	}
};

const initAllTabs = () => {
	const elements = Array.from(document.querySelectorAll('.js-tabs'));
	elements.forEach((el) => new Tabs(el).init());
};

export default initAllTabs;
