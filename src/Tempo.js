export default class Tempo {
    locationX = 0;
    locationY = 0;
    scales = {
               scaleNum: 1,
               scaleDown: false,
               upperLimit: 40,
               lowerLimit: 10,
               x: 1, 
               y: 1
             };

    constructor() {}
    
    render(ctx) {
        if (this.scales.x > this.scales.upperLimit || this.scales.y > this.scales.upperLimit) {
            this.scales.scaleDown = true;
        }
        if (this.scales.x <= this.scales.lowerLimit || this.scales.y <= this.scales.lowerLimit) {
            this.scales.scaleDown = false;
        }
        
        this.scales.x += this.scales.scaleDown ? -this.scales.scaleNum : this.scales.scaleNum;
        this.scales.y += this.scales.scaleDown ? -this.scales.scaleNum : this.scales.scaleNum;
        
        ctx.fillStyle = 'green';
        ctx.fillRect(this.locationX - this.scales.x/2, this.locationY - this.scales.y/2, this.scales.x, this.scales.y);
        // TODO change the scale of the tempo to match a pattern
        // The pattern will be used to sync the player input 
        // player misses a input with the tempo and will lose cool points
        // if cool points hit 0 game over
        // build a streak to increase point multiplier
    }

    set locationX(value) {
        this.locationX = value;
    }

    set locationY(value) {
        this.locationY = value;
    }

    get locationX() {
        return this.locationX
    }

    get locationY() {
        return this.locationY;
    }
}