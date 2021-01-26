class Gate extends PIXI.Sprite{
    constructor(parent=null){
        super(app.loader.resources["gate"].texture);
        const me = this;
        
        me.anchor.set(0.5);
        me.width = 90;
        me.height = 90;
        me.speed = 1;
        me.reward = 25;
        me.radius = 2;
        me.x = rangedRandomNumber(0, 1000);
        me.y = rangedRandomNumber(0, 666);
        me.xVel = 0;
        me.yVel = 0;
        me.rotation = 0;
        me.rotationSpeed = 0.6;

        if(parent){
            parent.addChild(me);
        }
    }
}
