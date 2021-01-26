const app = new PIXI.Application();
document.body.appendChild(app.view);

const gameContainer = new PIXI.Container();
app.stage.addChild(gameContainer);

const getGate = parent => new Gate(parent);

const randomNumberFromRange = (start, end) =>
{
    const range = end - start;
    const random = Math.random() * range;
    return start + random;
};

const gates = _.chain(new Array(5))
.map(()=> getGate(gameContainer))
.map(gate => {
    gate.x = randomNumberFromRange(50, 950);
    gate.y = randomNumberFromRange(25, 635);
    return gate;
})
.value();


app.ticker.add(delta =>
{
    _.forEach(gates, gate => gate.tick(delta));
});