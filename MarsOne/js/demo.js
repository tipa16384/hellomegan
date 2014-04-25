/**
 * 
 */

var stage = null;
var player = null;

$(function() {
	// Create a stage by getting a reference to the canvas
	stage = new createjs.Stage("stage");
	stage.canvas.width = 480;
	stage.canvas.height = 480;
	player = new createjs.Bitmap("img/player28x28.png");
	// Set position of Shape instance.
	player.x = (480-player.getBounds().width)/2;
	player.y = (480-player.getBounds().height)/2;
	// Add Shape instance to stage display list.
	stage.addChild(player);
	// Update stage will render next frame
	stage.update();
});
