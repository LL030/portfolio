<template>
  <div class="detect-element" ref="detectElement">
    <slot></slot>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  mounted() {

    // Get a reference to an element
    var square = document.querySelector('.main-container');

    // Create a manager to manager the element
    var manager = new Hammer.Manager(square);

    // Create a recognizer
    var Swipe = new Hammer.Swipe();

    // Add the recognizer to the manager
    manager.add(Swipe);
    // Declare global variables to swiped correct distance
    // Subscribe to a desired event
    manager.on('swipe', function(e,checkInView) {
      var direction = e.offsetDirection;
      if (direction === 8 || direction === 16) {
      }
    });
  },
  methods: {
    checkInView(){
        console.log(1123);
    }
  }
}

</script>

<style lang="scss" scoped>
@import "src/assets/scss/app.scss";
</style>
