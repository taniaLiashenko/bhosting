import { CountUp } from 'countup.js';

const counter = () => {
	const options = {
		useEasing: false,
		useGrouping: false,
		separator: '',
		decimal: '',
		prefix: '',
		suffix: ''
	};

	const countUp = new CountUp('users', 2514, options);
	const countUp2 = new CountUp('files', 6875, options);
	const countUp3 = new CountUp('pages', 25025, options);
	const countUp4 = new CountUp('store', 147, options);

	$('#counters').one('inview', (event, isInView) => {
		countUp.start();
		countUp2.start();
		countUp3.start();
		countUp4.start();
	});
};

export default counter;
