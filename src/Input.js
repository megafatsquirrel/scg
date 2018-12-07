export default class Input {
    pedal = false;
    pedalTime = 50;

    constructor() {}
    render(ctx) {
        ctx.fillStyle = 'grey';
        if (this.pedal) {
            ctx.fillRect(610, 310, 20, 20);
        } else {
            ctx.fillRect(600, 300, 40, 40);
        }
    }

    handleInput(input) {
        if (input !== undefined) {
             if (input === "a" && !this.pedal) {
                this.pedal = true;
                setTimeout(() => {
                    this.pedal = false;
                    clearTimeout(this);
                }, this.pedalTime);
            }
        }
    }
}