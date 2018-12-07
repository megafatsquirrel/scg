export default class Overlay {
    
    constructor() {}

    renderGameOver(ctx) {
        ctx.font = '124px serif';
        ctx.fillStyle = 'red';
        ctx.fillText('Game Over', 110, 150);
        ctx.font = '24px serif';
        ctx.fillStyle = 'grey';
        ctx.fillText('Press any key to reset', 290, 180);
    }

    renderNoteHit(ctx) {
        console.log('hit');
        ctx.font = '68px serif';
        ctx.fillStyle = 'green';
        ctx.fillText('HIT!', 200, 150);
    }

    renderNoteMiss(ctx) {
        console.log('miss');
        ctx.font = '68px serif';
        ctx.fillStyle = 'red';
        ctx.fillText('MISS!', 200, 150);
    }
}