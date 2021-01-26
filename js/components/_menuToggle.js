import CLASSES from '../helpers/_consts';

const $burger = $('.js-burger');

const $close = $('.js-close');

const $menu = $('.js-menu');

const openMenu = () => {
	$menu.removeClass(CLASSES.hidden);
	$menu.addClass(CLASSES.visible);
};

const initOpenMenu = () => $burger.click(openMenu);

const closeMenu = () => {
	$menu.removeClass(CLASSES.visible);
	$menu.addClass(CLASSES.hidden);
};

const initCloseMenu = () => $close.click(closeMenu);

const menuToggle = () => {
	initOpenMenu();
	initCloseMenu();
};

export default menuToggle;
