const rangedRandomNumber = (min, max) => {
    let random = Math.random() * (max - min);
    return min + random;
}

const collisionCircle = (i, j) => {
        let vx = i.x - j.x;
        let vy = i.y - j.y;

        let mag = Math.sqrt(vx * vx + vy * vy);

        let totalRad = i.radius + j.radius;

        return mag < (totalRad * totalRad);
    }

    const noOverlap = (i, j) => {
        let vx = i.x - j.x;
        let vy = i.y - j.y;

        let mag = Math.sqrt(vx * vx + vy *vy);

        let totalRad = i.radius + j.radius;

        if(collisionCircle(i, j)){
            let overlap = totalRad - mag;

            let dx = vx / mag;
            let dy = vy / mag;

            i.x += overlap * dx;
            i.y += overlap * dy;
        }
    }

const collisionDetection = (a, b) => {
    let hitboxA = a.getBounds();
    let hitboxB = b.getBounds();

    return hitboxA.x + hitboxA.width > hitboxB.x &&
            hitboxA.x < hitboxB.x + hitboxB.width &&
            hitboxA.y + hitboxA.height > hitboxB.y &&
            hitboxA.y <hitboxB.y + hitboxB.height;
}

const spawnEnemy = (parent) => {
    return new Enemy(parent);
}