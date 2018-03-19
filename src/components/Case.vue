<template>
  <div v-if="showcases">
    <div  class="work-detail">
      <div class="d-flex flex-wrap align-items-center content" style="opacity:1">
        <div class="w-100">
          <h1 class="Limelight title">{{showcases["wTitle"]}}</h1>
          <div class="d-flex justify-content-around tag align-items-center">
            <div class="d-flex align-items-center">
              <i class="far fa-clock"></i><span class="ml-2">{{showcases["wDate"]}}</span>
            </div>
            <div class="d-flex align-items-center">
              <i class="fas fa-users"></i><span class="ml-2">{{showcases["wTeam"]}}</span>
            </div>
            <div class="d-flex align-items-center">
              <i class="fas fa-code"></i><span class="ml-2">{{showcases["wLanguage"]}}</span>
            </div>
          </div>
          <div class="macbook-outer">
            <Macbook :bgImg="showcases['bgImg']"></Macbook>
          </div>
          <div class="div-spacing-w"></div>
        </div>
      </div>
      <div class="d-flex align-items-center flex-wrap fade-in-left detect-element content" ref="detectElement">
        <div class="phone-outer">
          <Phone :bgImg="showcases['bgImgM']"></Phone>
        </div>
        <div class="case-intro">
          <div v-html="showcases['wDesc']">
          </div>
        </div>
      </div>
      <div class="w-100 mt-3 mb-3"></div>
      <div class="d-flex align-items-center flex-wrap fade-in-left detect-element content technique" ref="detectElement">
          <div class="label mb-2 w-100">Technique</div>
          <div v-for="(tech,index) in showcases['wTech']" class="div-img">
            <Svgicon :svgname="tech"></Svgicon>
          </div>
      </div>
      <div class="d-flex align-items-center flex-wrap fade-in-left detect-element content" ref="detectElement">
        <div class="case-compare">
          <div v-if="showcases['bgBefore']" class="w-100">
            <div class="div-spacing-w"></div>
            <div class="content-title">Before</div>
            <div class="div-spacing-w"></div>
            <div class="case-before">
              <div v-for="(bgBefore,index) in showcases['bgBefore']" class="div-img" v-bind:style="{animationDelay:index*0.5+'s'}" >
                  <img :src="bgBefore"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center flex-wrap fade-in-left detect-element content" ref="detectElement">
        <div class="case-compare">
          <div v-if="showcases['bgAfter']" class="w-100">
            <div class="div-spacing-w"></div>
            <div class="content-title">After</div>
            <div class="div-spacing-w"></div>
            <div class="case-after">
              <div v-for="(bgAfter,index) in showcases['bgAfter']" class="div-img" v-bind:style="{animationDelay:index*1.5+'s'}" >
                  <img :src="bgAfter"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'showcases',
  props: {
    showcases:{
      type: Object,
      default: null
    }
  },
  mounted() {
    this.$emit('checkInView',1);
    this.$emit('routeViewChange',3);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "src/assets/scss/case.scss";
</style>
