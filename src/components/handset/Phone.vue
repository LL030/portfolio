<template>
  <div class="phone"  v-on:mouseover="mouseOver"  v-on:click="mouseOver">
    <div class="btn-left-top"></div>
    <div class="btn-left-mid"></div>
    <div class="btn-left-bot"></div>
    <div class="btn-right"></div>
  	<div class="top-box" v-bind:style="{borderRadius:radius}">
      <div class="part d-flex align-items-center">
        <div class="camera"></div><div class="ear" v-bind:style="{borderRadius:sRadius}"></div>
      </div>
  		<div  v-bind:class="[isHover ? 'screen detect-element hover':'screen detect-element']" v-bind:style="{backgroundImage:'url('+ bgImg +')'}"></div>
      <div class="phone-outer">
        <div class="home-btn" v-bind:style="{borderWidth:borderWidth}"></div>
      </div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'phone',
  props: {
    bgImg:{
      type: String,
      default: null
    }
  },
  data () {
    return {
    sRadius:  '5px',
    radius:  '10px',
    borderWidth:  '5px',
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
      /*this.sRadius = $('.phone').width()*0.02 + 'px';
      this.radius = $('.phone').width()*0.1 + 'px';
      this.borderWidth =   $('.phone-outer').width()*0.005 + 'px';
      window.onresize = () => {
        this.sRadius = $('.phone').width()*0.02 + 'px';
        this.radius = $('.phone').width()*0.1 + 'px';
        this.borderWidth =   $('.phone-outer').width()*0.005 + 'px';
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
    background-position-y:90%;
  }
  90% {
    background-position-y:90%;
  }
  100% {
    background-position-y:0%;
  }
}
.phone{
	width:100%;
  position:relative;
  .btn-left-top,.btn-left-mid,.btn-left-bot,.btn-right{
    position:absolute;
    background-color:#666;
  }
  .btn-left-top{
    left:0%;
    top:12%;
    width:1%;
    padding-top:8%;
  }
  .btn-left-mid{
    left:0%;
    top:20%;
    width:1%;
    padding-top:12%;
  }
  .btn-left-bot{
    left:0%;
    top:28%;
    width:1%;
    padding-top:12%;
  }
  .btn-right{
    right:0%;
    top:20%;
    width:1%;
    padding-top:12%;
  }
	.top-box{
		width:98%;
		margin-left:1%;
		border:1px solid #666;
    .part{
      margin:10% auto;
      .camera{
        background-color:#666;
        width:3%;
        padding-top:3%;
        border-radius:50%;
        margin-left:auto;
      }
      .ear{
        width:20%;
        padding-top:2%;
        background-color:#666;
        margin-left:4%;
        margin-right:auto;
      }

    }
		.screen{
			background-image:url('http://www.pilakuma.com//lib/image/portfolio/st-homepage.jpg');
			background-size:cover;
			background-position-y:0%;
			width:94%;
			padding-top:159%;
			margin:0% 3% 0% 3%;
			border:1px solid #666;
			&.hover,&.in-view{
				background-position-y:90%;
			    animation-duration: 8s;
			    animation-fill-mode: both;
			    animation-name:screenScroll;
			    //animation-iteration-count:infinite;
          animation-iteration-count:1;
			}
		}
    .home-btn{
        background-color:#666;
        width:13%;
        padding-top:13%;
        border-radius:50%;
        border-color:#aaa;
        border-style:solid;
        box-sizing:content-box;
        margin:3% auto;
    }
	}
}
</style>

