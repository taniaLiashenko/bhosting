import svg4everybody from 'svg4everybody';
import 'owl.carousel';
import 'jquery-inview';
import owlSliders from './components/_owlSliders';
import menuToggle from './components/_menuToggle';
import initAllTabs from './components/_tabs';
import initAllAccordions from './components/_accordions';
import counter from './components/_countUp';

svg4everybody();

const main = () => {
	owlSliders();
	menuToggle();
	initAllTabs();
	initAllAccordions();
	counter();
};

$(document).ready(main);
