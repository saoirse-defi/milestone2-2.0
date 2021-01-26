class Player extends PIXI.Sprite{
    constructor(parent=null){
        super(app.loader.resources['player'].texture);
        const me = this;

        me.anchor.set(0.5);
        me.x = 500;
        me.y = 333;
        me.width = 60;
        me.height = 60;
        me.speed = 10;
        me.radius = 1;
        me.xVel = 0;
        me.yVel = 0;

        if(parent){
            parent.addChild(me);
        }
    }

    //keeps hero within canvas bounds
    stayWithinArea(){
        me.x = Math.max(0 + me.radius, Math.min(me.x + me.xVel, 1000 - me.radius));
        me.y = Math.max(0 + me.radius, Math.min(me.y + me.yVel, 666 - me.radius));
    }
}