<template>
  <div v-if="showcases">
    <div  class="work-detail">
      <div class="d-flex flex-wrap align-items-center content" style="opacity:1">
        <div class="w-100">
          <h1 class="Limelight title">{{showcases["wTitle"]}}</h1>
          <div class="d-flex justify-content-around tag align-items-center">
            <div class="d-flex align-items-center">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" class="svg-inline--fa fa-clock fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16">
                <path fill="#fff" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm57.1 350.1L224.9 294c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v137.7l63.5 46.2c5.4 3.9 6.5 11.4 2.6 16.8l-28.2 38.8c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
              </svg>
              <span class="ml-2">{{showcases["wDate"]}}</span>
            </div>
            <div class="d-flex align-items-center">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" class="svg-inline--fa fa-users fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="16" height="16">
                <path fill="#fff" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
              </svg>
              <span class="ml-2">{{showcases["wTeam"]}}</span>
            </div>
            <div class="d-flex align-items-center">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" class="svg-inline--fa fa-code fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="16" height="16">
                <path fill="#fff" d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
              </svg>
              <span class="ml-2">{{showcases["wLanguage"]}}</span>
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
