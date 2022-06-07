/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// import paper, { view } from 'paper';
// import { Noise } from 'noisejs';

// let noise_seed = Math.random();
// const NOISE_GENERATOR = new Noise(noise_seed);
// const CANVAS = document.getElementById('paperjs-canvas');
// const NUM_LINES = 50;
// const PATH_SEGMENT_LENGTH = 20;
// const X_SPACING = CANVAS.clientWidth / NUM_LINES;
// const Y_SPACING = CANVAS.clientHeight / PATH_SEGMENT_LENGTH;

console.log('window onload');
window.onload = function() {
	// paper.setup(CANVAS);
	// paper.install(window);

	// view.onFrame = animate;
	// init();
};

// const init = () => {
// 	console.log('init called');
// 	// render_curves();
// };

// const render_curves = () => {
// 	for (let i = 0; i <= NUM_LINES; i++) {
// 		const myPath = new Path();
// 		myPath.selected = true;
// 		myPath.strokeColor = '#00c0c0';
// 		myPath.add(new Point(i * X_SPACING, 0));
// 		for (let j = 0; j <= PATH_SEGMENT_LENGTH; j++) {
// 			myPath.add(new Point(i * X_SPACING, Y_SPACING * j));
// 		}
// 	}
// };

// function animate(event) {
// 	console.log('animating');
// 	// seed = seed + 0.0025;
// 	// 0.3 * noise.simplex2(noise_seed + ix / 40, noise_seed + iy / 180);
// }
