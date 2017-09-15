demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){
        game.load.image('playAgainButton', 'assets/sprites/playAgainButton.png');
        game.load.image('mmButton', 'assets/sprites/mmButton.png');
    },
    create: function(){
        game.stage.backgroundColor = "#ff4d4d";
        var winText = game.add.text(centerX-200, centerY-400, 'YOU WIN!', {fontSize: '64px', fill: '#000', align: "center"});
        score = 0;
        
        var playAgainButton = game.add.button(250, 600, 'playAgainButton', function(){
            game.state.start('state1');
        })
        
        var mmButton = game.add.button(850, 600, 'mmButton', function(){
            game.state.start('state0');
        })
        
},
    update: function(){}
};