class Enemy extends PIXI.Sprite{
    constructor(parent=null){
        super(app.loader.resources["enemy"].texture);
        const me = this;
        
        me.anchor.set(0.5);
        me.width = 30;
        me.height = 30;
        me.speed = 4;
        me.reward = 100;
        me.dead = false;
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
        let dx = a - this.x;
        let dy = b - this.y;
        let honeAngle = Math.atan2(dy, dx);

        this.xVel = this.speed * Math.cos(honeAngle);
        this.yVel = this.speed * Math.sin(honeAngle);
    }

    
    //keeps alien within canvas bounds
    honeWithinArea(a, b) {
        this.hone(a, b);
      
        this.x = Math.max(0 + this.radius, Math.min(this.x + this.xVel, 1000 - this.radius));
        this.y = Math.max(0 + this.radius, Math.min(this.y + this.yVel, 666 - this.radius));
    }

   
}
