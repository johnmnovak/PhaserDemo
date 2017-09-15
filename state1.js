demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){
        game.load.tilemap("mappy", "assets/tilemaps/map1.json", null, Phaser.Tilemap.TILED_JSON);
        game.load.image("floorTiles", "assets/tilemaps/floorTiles.png");
        game.load.image("wallTiles", "assets/tilemaps/wallTiles.png");
    
        game.load.image("guy", "assets/sprites/Guy.png");
        game.load.image('star', "assets/sprites/star.png");
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = "#80ff80";
         
        var map = game.add.tilemap("mappy");
        map.addTilesetImage("floorTiles");
        map.addTilesetImage("wallTiles");
        
        var floor = map.createLayer("floor");
        walls = map.createLayer("walls");
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.world.setBounds(0, 0, 1600, 1600);
        guy = game.add.sprite(centerX, centerY, "guy");
        guy.anchor.setTo(0.5, 0.5);
        guy.scale.setTo(0.2, 0.2);
        game.physics.enable(guy);
        guy.body.collideWorldBounds = true;
        map.setCollisionBetween(0, 2, true, "walls");
        
        
        game.camera.y += 300;
        game.camera.follow(guy);
        game.camera.deadzone = new Phaser.Rectangle(centerX, centerY-400, 400, 400 );
        
        cursors = game.input.keyboard.createCursorKeys();
        
        stars = game.add.group();
        stars.enableBody = true;
        
        for (var i = 0; i < 10; i++){
            star = stars.create(Math.random()*1500, Math.random()*1500, 'star');
            star.scale.setTo(1.5, 1.5);
        }
        scoreText = game.add.text(16, 16, 'score: 0', {fontSize: '32px', fill: '#FFF', align: "center"});
        scoreText.fixedToCamera = true;
        
        game.physics.arcade.overlap(star, walls, relocateStar, null, this);
        game.physics.arcade.overlap(guy, star, relocateStar, null, this);
         function relocateStar(star){
            star.x = Math.random()*1500;
            star.y = Math.random()*1500;
        }
    },
    update: function(){
        game.physics.arcade.collide(guy, walls);
        game.physics.arcade.overlap(guy, stars, collectStar, null, this);
        if (score == 100){
            game.state.start('state2');
        }
        if(cursors.up.isDown){
            guy.body.velocity.y = -vel;
        }
        else if (cursors.down.isDown){
            guy.body.velocity.y = vel;
        }
        else {
            guy.body.velocity.y = 0;
        }
        
        if(cursors.left.isDown){
            guy.body.velocity.x = -vel;
        }
        else if (cursors.right.isDown){
            guy.body.velocity.x = vel;
        }
        else{
            guy.body.velocity.x = 0;
        }
        function collectStar(guy, star){
            star.kill();
            score += 10;
            scoreText.text = 'Score:' + score;
        }
       
        
    
    
    }
        
        
};
    