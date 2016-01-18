'use strict';

// MODULES //

var isLittleEndian = require( 'utils-is-little-endian' );


// INDEX //

var LOW;
if ( isLittleEndian ) {
	LOW = 0; // first index
} else {
	LOW = 1; // second index
}


// EXPORTS //

module.exports = LOW;
