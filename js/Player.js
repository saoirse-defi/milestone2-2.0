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
        this.x = Math.max(0 + this.radius, Math.min(this.x + this.xVel, 1000 - this.radius));
        this.y = Math.max(0 + this.radius, Math.min(this.y + this.yVel, 666 - this.radius));
    }
}