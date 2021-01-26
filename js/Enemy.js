class Enemy extends PIXI.Sprite{
    constructor(parent=null){
        super(app.loader.resources["enemy"].texture);
        const me = this;
        
        me.anchor.set(0.5);
        me.width = 30;
        me.height = 30;
        me.speed = 4;
        me.reward = 100;
        me.radius = 2;
        me.x = rangedRandomNumber(100, 900);
        me.y = rangedRandomNumber(75, 575);
        me.xVel = 0;
        me.yVel = 0;

        if(parent){
            parent.addChild(me);
        }
    }

    //swarms hero
    hone(a, b) {
        let dx = a - me.x;
        let dy = b - me.y;
        let honeAngle = Math.atan2(dy, dx);

        me.xVel = me.speed * Math.cos(honeAngle);
        me.yVel = me.speed * Math.sin(honeAngle);
    }

    
    //keeps alien within canvas bounds
    stayWithinBounds(a, b) {
        me.hone(a, b);
      
        me.x = Math.max(0 + me.radius, Math.min(me.x + me.xVel, 1000 - me.radius));
        me.y = Math.max(0 + me.radius, Math.min(me.y + me.yVel, 666 - me.radius));
    }
}
