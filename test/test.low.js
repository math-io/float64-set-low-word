'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var LOW = require( './../lib/low.js' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( typeof LOW === 'number', 'main export is a number' );
	t.end();
});

tape( 'if little endian, the export equals 0', function test( t ) {
	var LOW = proxyquire( './../lib/low.js', {
		'utils-is-little-endian': true
	});

	t.equal( LOW, 0, 'LOW equals 0' );
	t.end();
});

tape( 'if big endian, the export equals 1', function test( t ) {
	var LOW = proxyquire( './../lib/low.js', {
		'utils-is-little-endian': 'beep' // a value other than true
	});

	t.equal( LOW, 1, 'LOW equals 1' );
	t.end();
});

