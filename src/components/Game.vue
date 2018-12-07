<template>
  <div>
    <canvas id="Canvas" width="800" height="400"></canvas>
  </div>
</template>

<script>
import GameCore from "../GameCore.js";
export default {
  name: 'Game',
  data: function() {
    return {
      game: {}
    }
  },
  mounted: function () {
    this.game = new GameCore();
    this.gameCycle();

    window.addEventListener('keydown', (e) => {
      this.setInputKey(e.key);
    });

    window.addEventListener('keyup', (e) => {
      this.setInputKey(undefined);
      this.game.keyStillDown = false;
    });
  },
  methods: {
    gameCycle: function() {
      this.game.handleInput(this.game.currentInput);
      this.game.logic();
      this.game.clearCanvas();
      this.game.render();
      window.requestAnimationFrame(this.gameCycle);
    },
    setInputKey: function(key) {
      this.game.currentInput = key;
    }
  },
}
</script>

<style scoped>
  #Canvas {
    border: 1px solid #000;
  }
</style>
