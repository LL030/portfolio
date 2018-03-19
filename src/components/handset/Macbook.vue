<template>
  <div class="macbook"  v-on:mouseover="mouseOver"  v-on:click="mouseOver">
    <div class="top-box" v-bind:style="{borderRadius:radius}">
      <div class="camera"></div>
      <div  v-bind:class="[isHover ? 'screen hover detect-element':'screen detect-element']" v-bind:style="{backgroundImage:'url('+ bgImg +')'}"></div>
      <div class="macbook-outer">
      </div>
    </div>
    <div class="bottom-box" v-bind:style="{borderBottomLeftRadius:radius,borderBottomRightRadius:radius}">
      <div class="grooves" v-bind:style="{borderBottomLeftRadius:radius,borderBottomRightRadius:radius}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Macbook',
  props: {
    bgImg:{
      type: String,
      default: null
    }
  },
  data () {
    return {
    radius:  '2vw',
    isHover: false,
      msg:'1',
    }
  },
  methods: {
    mouseOver(){
      this.isHover = true;
    }
  },
  mounted(){
      /*this.radius = $('.macbook').width()*0.02 + 'px';
      window.onresize = () => {
        this.radius = $('.macbook').width()*0.02 + 'px';
      }*/
  }
}
</script>

<style lang="scss" scoped>
@keyframes screenScroll {
  0% {
    background-position-y:0%;
  }
  20% {
    background-position-y:0%;
  }
  80% {
    background-position-y:100%;
  }
  90% {
    background-position-y:100%;
  }
  100% {
    background-position-y:0%;
  }
}
.macbook{
  width:100%;
  .top-box{
    width:98%;
    height:92%;
    margin-left:1%;
    border:1px solid #666;
    border-bottom:0px solid #666;
    .camera{
      background-color:#aaa;
      width:7px;
      height:7px;
      display:block;
      margin:1.5% auto;
      border-radius:50%;
    }
    .screen{
      background-image:url('http://www.pilakuma.com//lib/image/portfolio/st-homepage.jpg');
      background-size:cover;
      background-position-y:0%;
      width:94%;
      padding-top:60%;
      margin:0% 3% 2% 3%;
      border:1px solid #666;
      &.hover,&.in-view{
        background-position-y:100%;
          animation-duration: 12s;
          animation-fill-mode: both;
          animation-name:screenScroll;
          animation-iteration-count:1;
      }
    }
  }
  .bottom-box{
    width:100%;
    padding-bottom:2%;
    border:1px solid #666;
    .grooves{
      width:20%;
      padding-top:2%;
      margin:0 auto;
      background-color:#333;
      border:1px solid #666;
      border-top:0px solid #666;
    }
  }
}
</style>

