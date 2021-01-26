let keyTracker = {};
let gate1 = {};
let gates = [];

const rangedRandomNumber = (min, max) => {
    let random = Math.random() * (max - min);
    return min + random;
}

const gameLoop = () => {

    keyTracker.innerHTML = JSON.stringify(keys);

        //W key
        if(keys["87"]){
            hero.y -= hero.speed; //5 being movement speed, lets set as own variable later
        }
        //A key
        if(keys["65"]){
            hero.x -= hero.speed;
        }
        //S key
        if(keys["83"]){
            hero.y += hero.speed;
        }
        //D key
        if(keys["68"]){
            hero.x += hero.speed;
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
    
    app.ticker.add(gameLoop);
    app.ticker.add((delta) => {
        gate1.rotation += 0.005 * delta;
    });

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
        .add("gate", "cleargate.png");

    app.loader.onError.add(errorReport);
    app.loader.onComplete.add(loadingFinished);

    app.loader.load();
}