var canvasElement = document.getElementById( 'canvas' );

function emulatorResize() {
	var emulatorWidth = canvasElement.offsetWidth;
	var emulatorHeight = canvasElement.offsetHeight;
	var scaleWidth = document.body.offsetWidth / emulatorWidth;
	var scaleHeight = document.body.offsetHeight / emulatorHeight;
	var newScale = Math.min( scaleWidth, scaleHeight );
	
	canvasElement.style.imageRendering = '-moz-crisp-edges';
	canvasElement.style.imageRendering = '-o-crisp-edges';
	canvasElement.style.imageRendering = '-webkit-optimize-contrast';
	canvasElement.style.imageRendering = 'optimize-contrast';
	canvasElement.style.imageRendering = 'crisp-edges';
	canvasElement.style.imageRendering = 'pixelated';
	canvasElement.style.imageRendering = 'optimizeSpeed';
	canvasElement.style.width = Math.floor( emulatorWidth * newScale ) +'px';
	canvasElement.style.height = Math.floor( emulatorHeight * newScale ) +'px';
	canvasElement.width = emulatorWidth;
	canvasElement.height = emulatorHeight;
}

var identifier = new RegExp( '[\?&]identifier=([^&#]*)' ).exec( window.location.href )[1];
var emulator_ext = new RegExp( '[\?&]emulator_ext=([^&#]*)' ).exec( window.location.href )[1];
var emulator = new IALoader( canvasElement, identifier + '/' + identifier + '.' + emulator_ext, { before_run: emulatorResize } );
emulator.start( { waitAfterDownloading: false } );
