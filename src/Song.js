export default class Song {
    currentSong = undefined;
    songStart = undefined;
    isSongPlaying = false;
    songHitArea = undefined;
    note = undefined;
    noteCrossedLeftBound = false;

    constructor() {
        this.note = { x: 840, y: 370, inHitBox: false };
    }

    render(ctx) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 360, 800, 40);

        ctx.fillStyle = 'black';
        ctx.fillRect(this.note.x, this.note.y, 20, 20);

        ctx.fillStyle = 'purple';
        ctx.fillRect(380, 360, 10, 40);        
        ctx.fillRect(420, 360, 10, 40);

        if (this.note.x < 421 && this.note.x > 379 ) {
            this.note.inHitBox = true;
        }else{
            this.note.inHitBox = false;
        }

        if (this.note.x < 359) {
            this.noteCrossedLeftBound = true;
        }

        this.note.x -= 2;
        if (this.note.x < 0) {
            this.note.x = 840;
            this.noteCrossedLeftBound = false;
        }
    }
}