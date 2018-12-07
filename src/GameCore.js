import Tempo from "./Tempo";
import Coolness from "./Coolness";
import Input from "./Input";
import Song from "./Song";
import Overlay from "./Overlay";

export default class GameCore {
    canvas = undefined;
    ctx = undefined;
    gameObjects = [];
    song = undefined;
    tempo = undefined;
    coolness = undefined;
    input = undefined;
    overlay = undefined;
    currentInput = undefined;
    keyStillDown = false;
    isGameOver = false;
    noteHit = false;
    noteMiss = false;
    noteValid = false;

    constructor() {
        this.canvas = document.getElementById('Canvas');
        this.ctx = this.canvas.getContext('2d');
        
        this.song = new Song();

        this.tempo = new Tempo();
        this.tempo.locationX = 100;
        this.tempo.locationY = 300;
        this.coolness = new Coolness();

        this.input = new Input();
        
        this.overlay = new Overlay();
        
        this.gameObjects.push(this.song);
        this.gameObjects.push(this.tempo);
        this.gameObjects.push(this.coolness);
        this.gameObjects.push(this.input);
    }

    clearCanvas() {
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    render() {
        for (var i = 0; i < this.gameObjects.length; i++) {
            this.gameObjects[i].render(this.ctx);
        }
        if (this.noteHit) {
            this.overlay.renderNoteHit(this.ctx);
            this.noteHit = false;
        }
        if (this.noteMiss) {
            this.overlay.renderNoteMiss(this.ctx);
            this.noteMiss = false;
        }
        if (this.isGameOver) {
            this.overlay.renderGameOver(this.ctx);
        }
    }

    handleInput(input) {
        if (!this.keyStillDown && input !== undefined) {
            if (!this.isGameOver) {
                this.input.handleInput(input);
                this.keyStillDown = true;
            } else {
                this.resetGame();
            }
        }
    }

    logic() {
        if (!this.isGameOver) {

            this.coolness.cool -= 0.01;
            
            if (this.input.pedal) {
                this.noteValid = false;
                if (this.song.note.inHitBox) {
                    this.coolness.setCool(0.20);
                    this.noteHit = true;
                }else if (!this.song.note.inHitBox) {
                    this.coolness.setCool(-10);
                    this.noteMiss = true;
                }
            }

            if (this.noteValid && this.song.note.noteCrossedLeftBound) {
                this.coolness.setCool(-10);
                this.noteMiss = true;
                this.noteValid = false;
            }

            if (this.coolness.cool < 0) {
                this.isGameOver = true;
            }
        }
    }

    resetGame() {
        this.gameObjects = [];
        this.song = undefined;
        this.tempo = undefined;
        this.coolness = undefined;
        this.input = undefined;
        this.overlay = undefined;

        // write reset game logic
        // copy from constructor
        this.song = new Song();

        this.tempo = new Tempo();
        this.tempo.locationX = 100;
        this.tempo.locationY = 300;
        this.coolness = new Coolness();

        this.input = new Input();
        
        this.overlay = new Overlay();
        
        this.gameObjects.push(this.song);
        this.gameObjects.push(this.tempo);
        this.gameObjects.push(this.coolness);
        this.gameObjects.push(this.input);

        this.isGameOver = false;
        this.coolness.setCool(100);
        
    }
}