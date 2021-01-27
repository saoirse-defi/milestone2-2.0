let keyTracker = {};
let gate1 = {};
let player = {};
let enemy1 = {};
let gates = [];
let enemyArray = [];

const gameLoop = () => {

    keyTracker.innerHTML = JSON.stringify(keys);

        //W key
        if(keys["87"]){
            player.y -= player.speed; //5 being movement speed, lets set as own variable later
        }
        //A key
        if(keys["65"]){
            player.x -= player.speed;
        }
        //S key
        if(keys["83"]){
            player.y += player.speed;
        }
        //D key
        if(keys["68"]){
            player.x += player.speed;
        }
};

 //keyboard functions
    const keyPressed = (e) => {
        keys[e.keyCode] = true;
    };

    const keyReleased = (e) => {
        keys[e.keyCode] = false;
    };


const errorReport = (e) => {
    console.log("Error: " + e);
};

const initialSpawn = () => {
    player = new Player(app.stage);

    enemyArray = _.map(new Array(10), item => spawnEnemy(app.stage));

    gate1 = new Gate(app.stage);
    gates.push(gate1);
};


const loadingFinished = () => {
    initialSpawn();

    container = new PIXI.Container({
            width: 1000,
            height: 666
        });
    
    app.stage.addChild(container);

    app.stage.interactive = true;

    //keyboard event handlers
    window.addEventListener("keydown", keyPressed);
    window.addEventListener("keyup", keyReleased);
    
    /* app.ticker.add(gameLoop);
    app.ticker.add((delta) => {
        gate1.rotation += 0.005 * delta;
    }); */

    app.ticker.add(() => {
        gameLoop();
        player.stayWithinArea();
        
        for(let i = 0; i < enemyArray.length; i++){
            enemyArray[i].honeWithinArea(player.x, player.y);
        }
    
    })

    keyTracker = document.querySelector("#keys");
};

window.onload = () => {

    app = new PIXI.Application({
        width: 1000,
        height: 666
    });

    document.querySelector("#game-div").appendChild(app.view);

    app.loader.baseUrl = "images";
    app.loader
        .add("player", "player.png")
        .add("gate", "cleargate.png")
        .add("enemy", "enemy.png");

    app.loader.onError.add(errorReport);
    app.loader.onComplete.add(loadingFinished);

    app.loader.load();
}