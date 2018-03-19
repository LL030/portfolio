<template>
  <div v-bind:class="['viewbox', routeClass]" v-bind:style="{backgroundImage:viewboxOuterStyle}">
    
      <div class="content-fullpage">
        <div id="profile" class="profile">
          <div class="horizontal"></div>
            <h1>Leven Pang</h1>
            <section>
              <h2 class="section-title">Work History</h2>
              <div class="company">
                <div class="job-title">Web developer</div>
                <h3 class="company-name"><strong>MG Interactive Limited</strong><em>May 2017 - Present</em></h3>
                <ul>
                  <li>Major frontend developer</li>
                  <li>Build up e-commerce platform for meadjohnson hk</li>
                  <li>Follow up e-commerce enhancement,campaign</li>
                  <li>Devleop campaign site for different project</li>
                  <li>Revamp smartone website</li>
                  <li>Exploring on frontend technology for different project requirements</li>
                  <li>Solve the difficulties encountered by the front end side</li>
                </ul>
              </div>
              <div class="company">
                <div class="job-title">Front end developer</div>
                <h3 class="company-name"><strong>Digisald.cool Limited</strong><em>Jul 2016 - Feb 2017</em></h3>
                <ul>
                  <li>Major frontend developer</li>
                  <li>Quick new technology and practice in project</li>
                  <li>Revamp a wine e-shop and new feature develop, mini-site develop.</li>
                </ul>
              </div>
              <div class="company">
                <div class="job-title">Web Designer</div>
                <h3 class="company-name"><strong>Polybag.com.hk Limited</strong><em>Oct 2013 - Feb 2016</em></h3>
                <ul>
                  <li>Maintain/Build-up the CMS for existing website</li>
                  <li>staff IT maintenance support</li>
                  <li>community management, products artwork design</li>
                </ul>
              </div>
            </section>
            <section>
              <h2 class="section-title">Education</h2>
              <div class="content">
                <div class="education-title">Higher Diploma In Multimedia and the InternetTechnology</div>
                <h3 class="education-school"><strong>Hong Kong Institute of Vocational Education</strong><em>Sep 2012 - Aug 2016</em></h3>
                <p style="text-align: left;">Study the multimedia knowledge and skills of digital technology, covering areas in audio and video production, computer game, animation, TV commercial, exhibition, entertainment and other multi-media production.</p>
              </div>
            </section>
            <section>
              <h2 class="section-title">Skills</h2>
              <div class="content">
                <h3>Script Language </h3>
                <p style="text-align: left;">HTML5, CSS3, PHP, Javascript, Sass/Less</p>
                <h3>Frontend Framework</h3>
                <p style="text-align: left;">Jquery, Bootstrap, ReactJs, VueJs</p>
                <h3>Opensouce Platform</h3>
                <p style="text-align: left;">Wordpress,Opencart</p>
                <h3>Knowledge</h3>
                <p style="text-align: left;">MVC, Responsiven Design, RESTFul, GIT, etc.</p>
              </div>
            </section>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    setTimeout:0
  },
  data () {
    return {
      msg:'1',
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
    this.$emit('routeViewChange', 2);
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/scss/profile.scss";
</style>
