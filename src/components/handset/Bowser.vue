<template>
  <div class="bowser"  v-on:mouseover="mouseOver"  v-on:click="mouseOver">
  	<div class="box">
  		<div class="top-bar align-items-center d-flex">
  			<i class="i-close"></i>
  			<i class="i-minus"></i>
  			<i class="i-maximize"></i>
  		</div>
  		<div  v-bind:class="[isHover ? 'screen hover':'screen']" v-bind:style="{backgroundImage:'url('+ bgImg +')'}"></div>
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
	  isHover: false,
      msg:'1',
    }
  },
  methods: {
    mouseOver(){
  		//this.isHover = true;
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes screenScroll {
  0% {
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
.bowser{
	width:100%;
	.top-bar{
		padding:2%;
	}
	.i-group{
		width:20%;
	}
	.i-close,.i-minus,.i-maximize{
		width:0.8vw;
		height:0.8vw;
		margin-left:5px;
		display:block;
		border-radius:50%;
	}
	.i-close{
		background-color:#ff5f56;
	}
	.i-minus{
		background-color:#febd2e;
	}
	.i-maximize{
		background-color:#29cc42;
	}
	.box{
		width:100%;
		border-radius:1vw 1vw 0 0;
		background-color:#666;
		.screen{
			border-left:1px solid #666;
			border-right:1px solid #666;
			border-bottom:1px solid #666;
			background-size:cover;
			background-position-y:0%;
			width:100%;
			padding:30%;
			&.hover{
				background-position-y:100%;
			    animation-duration: 8s;
			    animation-delay:3s;
			    animation-fill-mode: both;
			    animation-name:screenScroll;
			}
		}
	}
}
</style>

