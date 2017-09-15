var demo = {}, centerX = 1600/2, centerY = 1600/2, guy, vel = 300, cursors, walls, star, score = 0, scoreText;
demo.state0 = function() {};
demo.state0.prototype = {
    preload: function(){
        game.load.image('playButton', 'assets/sprites/playButton.png');
    },
    create: function(){
        game.stage.backgroundColor = "#002080";
        var winText = game.add.text(centerX-400, centerY-400, 'Interactive Phaser Demo', {fontSize: '64px', fill: '#000', align: "center"});
        
        var playButton = game.add.button(550,650, 'playButton', function(){
            game.state.start('state1');
        })
    },
    update: function(){}
};