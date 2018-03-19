<template>
  <div class="nav-item w-100 d-flex align-items-center" v-on:mouseenter="mouseEnter" v-on:mouseleave="mouseLeave">
    <svg class="symbol" viewBox="0 0 28 28" >
      <circle v-bind:class="[isHover ? 'o-c breathe':'o-c']" cx="13" cy="13" stroke-width="2" fill="none" />
      <circle class="i-c"  cx="13" cy="13" r="3" />
    </svg>
    <div v-bind:class="[itemShow ? 'nav-item-text-outer fi':'nav-item-text-outer']">
    <span v-bind:class="[isHover ? 'nav-item-text mr-auto hover':'nav-item-text mr-auto']" >{{navItemText}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-items',
  props: {
    navItemText: null,
    itemShow: null
  },
  data(){
  	return {
	  	isHover: false,
	  	error: null
	  }
  },
  methods: {
    mouseEnter(){
  		this.isHover = true;
    },
    mouseLeave(){
  		this.isHover = false;
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
	@import "src/assets/scss/nav/navItem.scss";
</style>
