'use strict';

var pow = require( 'math-power' );
var round = require( 'math-round' );
var setLowWord = require( './../lib' );

var MAX_UINT;
var frac;
var exp;
var low;
var x;
var y;
var i;

// Max unsigned 32-bit integer:
MAX_UINT = pow( 2, 32 ) - 1;

// Generate a random double-precision floating-point number:
frac = Math.random() * 10;
exp = -round( Math.random() * 323 );
x = frac * pow( 10, exp );

// Replace the lower order word of `x` to generate new random numbers having the same higher order word...
for ( i = 0; i < 100; i++ ) {
	low = round( Math.random()*MAX_UINT );
	y = setLowWord( x, low );
	console.log( 'x: %d. new low word: %d. y: %d.', x, low, y );
}
