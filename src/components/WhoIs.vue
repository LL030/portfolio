<template>
  <div v-bind:class="['viewbox', routeClass]" v-bind:style="{backgroundImage:viewboxOuterStyle}">
      <div class="content-fullpage">
        <div class="intro">
          <p>My name is <span class="high-light">Leven</span>, <span class="high-light">4</span> years experiences on web technology</p>
          <p>Where I work as a <span class="high-light">WEB</span> developer at hong kong software company</p>
          <p>I specialize in <span class="high-light">frontend side</span>, good consciousness at <span class="high-light">UI/UX</span></p>
          <p>Now I seeking for <span class="high-light">freelance</span> work, feel free to <span class="underline" v-on:click="touchClick">contact me </span>.</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'WhoIs',
  props:['touchClick'],
  data () {
    return {
      msg: 'My name is leven pang, 4 years experiences on web develop. My ability is growing fast. but i always strive for more, ',
      routeClass: '',
      viewboxOuterStyle: ''
    }
  },
  beforeRouteLeave (to, from, next) {
    this.routeClass = 'page-leave';
    setTimeout(function() {
      next();
    }, 300);
  },
  beforeRouteEnter (to, from, next) {
    // just use `this`
    next(vm => {
      vm.routeClass = 'page-enter';
    });
  },
  mounted() {
    this.$emit('routeViewChange', 1);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "src/assets/scss/whois.scss";
</style>
