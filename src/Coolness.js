export default class Coolness {
    maxCool = 100;
    cool = 0;

    constructor() {
        this.cool = this.maxCool;
    }
    
    render(ctx) {
        ctx.font = '48px serif';
        ctx.fillText('COOL:' + this.cool.toFixed(0), 10, 50);
    }

    setCool(value) {
        if (value + this.cool <= this.maxCool) {
            this.cool += value;
        }
    }

    get cool() {
        return this.cool;
    }
}