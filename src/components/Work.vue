<template>
  <div v-bind:class="['viewbox', routeClass]" v-bind:style="{backgroundImage:viewboxOuterStyle}">
      <div class="work-container">
        <div v-if="caseid">
          <Case :showcases="showcases[caseid]" @checkInView="checkInView" @routeViewChange="routeViewChange" ></Case>
        </div>
        <div v-else class="d-flex flex-wrap">
          <div  v-for="(showcase,index) in showcases" class="case">
            <div class="bowser-outer ">
              <Bowser :bgImg="showcases[index]['bgImg']" ></Bowser>
            </div>
            <div class="desc d-flex flex-column justify-content-between">
              <h2>{{showcases[index]['wTitle']}}</h2>
              <div v-html="showcases[index]['wDesc']">
              </div>
              <!-- I lead the outsource frontend team work together with the Production team of TBWA Hong Kong. -->
              <div class="ctrl d-flex">
                <div class="more-btn" onclick="">
                  <router-link :to="{ path: 'work/'+index}">
                    <svg class="symbol" viewBox="0 0 50 50" style="width:38px;height:38px">
                      <title>view more</title>
                      <circle class="o-c" cx="25" cy="25" r="23" stroke-width="3" fill="none" />
                      <circle class="i-c"  cx="15" cy="25" r="2.5" />
                      <circle class="i-c"  cx="25" cy="25" r="2.5" />
                      <circle class="i-c"  cx="35" cy="25" r="2.5" />
                    </svg>
                  </router-link>
                </div>
                <div class="view-site">
                  <a href="#">
                    <svg class="symbol" viewBox="0 -5 490 490" style="width:39px;height:39px">
                      <title>Visit Site</title>
                      <g>
                          <path d="M479.992,232.147c-17.132-17.134-45.011-17.134-62.155,0l-46.938,46.95c-13.429,13.422-16.337,33.461-8.714,49.746   l-17.177,17.17c-16.29-7.616-36.317-4.716-49.745,8.717l-46.948,46.952c-17.138,17.131-17.138,45.011,0,62.155   c17.142,17.146,45.023,17.146,62.16,0l46.944-46.951c14.016-14.008,16.565-35.195,7.671-51.819l16.137-16.142   c16.631,8.896,37.823,6.347,51.826-7.661l46.949-46.949C497.146,277.177,497.146,249.291,479.992,232.147z M343.084,402.546   L296.14,449.5c-9.226,9.227-24.242,9.227-33.478-0.005c-9.233-9.231-9.226-24.241,0-33.473l46.938-46.938   c5.235-5.236,12.31-7.485,19.14-6.796l-12.519,12.525c-5.396,5.391-5.396,14.166,0,19.562c5.389,5.384,14.162,5.384,19.556,0   l13.657-13.658C351.096,388.345,348.986,396.641,343.084,402.546z M465.654,279.962l-46.944,46.949   c-5.926,5.927-14.199,8.027-21.827,6.359l8.432-8.444c5.396-5.384,5.396-14.159,0-19.557c-5.393-5.388-14.156-5.388-19.551,0   l-7.321,7.312c-0.689-6.83,1.57-13.908,6.785-19.129l46.949-46.952c9.226-9.224,24.247-9.22,33.478,0   C474.881,255.727,474.881,270.741,465.654,279.962z M224.028,437.243c0.411,10.244,3.156,20.378,8.272,29.584   c-60.286,2.077-113.815-17.631-159.433-59.362c-41.661-38.097-65.127-85.877-71.48-141.9   C-11.938,148.193,72.302,37.869,188.818,19.983c11.347-1.742,22.822-2.57,34.241-3.821c0.813,0,1.62,0,2.433,0   c12.226,1.272,24.585,1.814,36.67,3.916c60.592,10.563,109.119,40.889,145.402,90.485c19.775,27.051,32.913,57.007,38.638,89.533   c-12.557,2.591-24.11,8.755-33.385,18.023l-20.739,20.754c-1.104-3.223-1.776-6.725-1.93-10.575   c-0.396-10.484-2.157-12.64-12.883-14.982c-11.233-2.454-14.818-7.51-11.658-18.569c2.106-7.374,5.575-14.378,8.731-21.428   c3.293-7.357,5.487-14.608,3.81-22.963c-1.521-7.508-1.293-15.168,5.58-21.473c-6.406-7.277-12.312-14.325-18.616-21   c-2.978-3.142-5.472-2-6.392,2.41c-0.219,1.081-0.178,2.219-0.438,3.294c-2.312,9.831-8.383,12.082-16.307,6.074   c-1.324-1.007-2.483-2.43-3.973-2.953c-2.493-0.873-5.328-1.989-7.779-1.573c-8.525,1.445-9.926,0.424-9.173-8.024   c0.549-5.962-1.543-8.219-7.458-7.945c-2.018,0.101-4.039,0.514-6.062,0.561c-6.382,0.101-10.388-4.741-8.806-10.921   c0.817-3.193,2.582-6.143,3.349-9.335c0.579-2.375,1.312-6.063,0.111-7.256c-4.883-4.791-10.146-9.415-15.913-13.045   c-10.388-6.556-20.894-1.76-31.217,0.667c-1.111,8.438-2.278,9.576-10.326,7.188c-9.567-2.856-18.667-6.851-25.19-15.078   c-0.817-1.042-2.78-1.847-4.085-1.707c-9.878,1.124-19.735,2.421-29.552,3.948c-1.415,0.229-3.628,2.126-3.602,3.218   c0.033,1.893,1.283,5.154,2.453,5.362c3.188,0.561,6.887,0.55,9.855-0.588c4.069-1.573,7.521-4.651,11.469-6.614   c4.786-2.374,8.244-0.62,9.602,4.545c1.616,6.121-0.562,11.308-5.55,14.49c-6.795,4.32-14.249,7.617-21.286,11.578   c-4.949,2.766-10.008,5.502-14.401,9.027c-3.524,2.834-5.973,7.233-3.171,11.756c2.607,4.203,7.223,3.215,11.055,1.857   c3.936-1.387,7.662-3.444,11.325-5.489c2.23-1.25,4.074-3.195,6.261-4.533c4.368-2.663,6.694-1.76,8.369,2.984   c2.802,7.981,8.136,9.828,15.28,5.201c3.094-2,5.872-4.533,9.089-6.271c4.758-2.561,9.845,0.161,10.305,5.155   c0.677,7.313,2.376,8.736,9.629,7.923c4.273-0.481,8.536-1.114,12.805-1.686c0.383,0.435,0.755,0.862,1.128,1.3   c-1.494,2.779-2.354,6.314-4.607,8.164c-3.479,2.834-7.771,4.834-11.957,6.621c-6.089,2.596-11.56,4.159-11.772,4.511   c0,0,8.546,3.459,4.041,4.742c-7.431,2.101-18.681,14.148-2.523,9.149c2.897-0.886,5.858-1.598,9.923-2.7   c-3.396,10.219-10.577,14.237-17.688,18.049c-21.275,11.379-22.022,38.651-11.162,52.648c2.358,3.042,4.319,6.454,5.991,9.923   c1.931,3.995,1.797,8.787-2.041,10.887c-2.577,1.411-7.765,1.114-10.069-0.646c-5.586-4.279-10.657-9.485-15.056-15.04   c-5.593-7.036-9.614-15.396-15.532-22.104c-19.12-21.645-40.703-16.876-59.177-0.583c-4.674,4.126-4.053,7.858,1.102,11.25   c1.829,1.196,3.838,2.202,5.879,3.021c8.203,3.319,16.463,6.479,24.667,9.784c1.685,0.679,3.411,1.469,4.812,2.594   c2.848,2.288,2.999,4.73-0.711,6.205c-2.71,1.07-5.62,1.718-8.489,2.342c-5.391,1.172-11.089,1.499-16.116,3.535   c-2.914,1.183-6.247,4.791-6.632,7.671c-0.332,2.46,2.93,5.82,5.273,8.086c1.753,1.673,4.693,2.035,6.88,3.37   c3.031,1.838,6.299,3.634,8.662,6.188c3.984,4.318,6.807,5.396,11.978,2.501c4.982-2.78,9.779-5.877,14.586-8.952   c5.704-3.634,6.779-3.186,10.071,2.648c4.085,7.256,9.709,13.23,18.854,11.611c6.532-1.17,12.73-4.181,19.097-6.325   c4.33-1.466,8.593-3.601,13.045-4.126c9.104-1.089,16.078,6.615,16.598,17.28c0.509,10.67-4.43,18.659-11.966,25.601   c-7.38,6.794-11.358,14.563-7.963,25.125c3.615,11.229-0.229,20.87-8.821,28.333c-5.962,5.188-12.55,9.687-19.115,14.108   c-7.699,5.17-20.521,33.506-17.698,43.485c0.539,1.871,0.7,2.123,0.562,4.142c-0.733,10.639-6.191,8.767-15.697,10.431   c-5.36,0.941-4.833-10.431-6.068-15.628c-1.181-4.991-1.176-10.539-0.396-15.65c0.764-5.016,3.122-9.795,4.835-14.653   c3.598-10.184,0.999-18.853-6.481-26.244c-3.277-3.24-6.86-6.173-10.223-9.324c-12.224-11.437-18.158-25.816-18.805-42.288   c-0.322-8.293,3.754-12.071,11.976-12.846c1.721-0.167,3.434-0.396,5.154-0.593c-0.963-6.891-3.485-9.506-10.227-9.932   c-6.401-0.389-10.129-4.006-12.588-9.276c-1.148-2.462-1.356-5.352-2.325-7.911c-2.316-6.107-3.936-12.74-7.539-18.017   c-3.233-4.753-5.888-8.854-5.759-14.895c0.06-2.823-1.978-6.106-3.94-8.449c-4.459-5.286-9.396-10.178-14.276-15.091   c-1.917-1.925-4.214-3.48-7.374-6.042c-0.219,4.837-0.219,7.97-0.527,11.057c-0.439,4.377-0.493,8.944-1.894,13.013   c-0.78,2.273-4.113,5.304-6.025,5.118c-2.438-0.229-5.946-2.984-6.583-5.316c-1.17-4.271-1.49-9.217-0.582-13.56   c4.229-20.38,6.021-40.832,3.646-61.557c-0.868-7.595-1.921-15.157-2.988-23.573c-39.792,46.808-58.857,131.85-19.71,207.014   C88.911,397.331,153.942,436.291,224.028,437.243z"/>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
var path = 'https://pilakuma.s3.ap-southeast-1.amazonaws.com/'; 
var showcases = [
  {
    wTitle:'SmartTone WebSite Revamp',
    wDate:"2018",
    wTeam:'3',
    wLanguage:'JSP',
    bgImg:path + 'lib/image/portfolio/smartone/homepage.jpg',
    bgImgM:path + 'lib/image/portfolio/smartone/m-homepage.jpg',
    bgBefore:[path + 'lib/image/portfolio/smartone/before-1.jpg',path + 'lib/image/portfolio/smartone/before-2.png',path + 'lib/image/portfolio/smartone/before-3.png'],
    bgAfter:[path + 'lib/image/portfolio/smartone/after-1.jpg',path + 'lib/image/portfolio/smartone/after-2.jpg',path + 'lib/image/portfolio/smartone/after-3.jpg',path + 'lib/image/portfolio/smartone/after-4.jpg'],
    wTech:['jsp','sass'],
    wSite:'https://www.smartone.com/en/',
    wDesc:'<p>SmarTone is a major telecommunications company operating in Hong Kong and Macau. Our Team are responsible covert the existing website to New responsive web design ...</p>'
  },
  {
    wTitle:'Mjn Ecomm',
    wDate:"2017",
    wTeam:'3',
    wLanguage:'PHP',
    bgImg:path + 'lib/image/portfolio/mjn/homepage.jpg',
    bgImgM:path + 'lib/image/portfolio/mjn/m-homepage.jpg',
    bgAfter:[path + 'lib/image/portfolio/mjn/after-1.jpg',path + 'lib/image/portfolio/mjn/after-2.jpg',path + 'lib/image/portfolio/mjn/after-3.jpg',path + 'lib/image/portfolio/mjn/after-4.jpg'],
    wTech:['php','sass','opencart'],
    wSite:'https://store.meadjohnson.com.hk',
    wDesc:'<p>Mead Johnson Nutrition is a leading manufacturer of infant formula. Follow client\'s request and global site style guide we build the ecomm for Hong Kong And Mainland China market...</p>'
  },
  {
    wTitle:'ChinChin WebShop',
    wDate:"2017",
    wTeam:'2',
    wLanguage:'Ruby,React',
    bgImg:path + 'lib/image/portfolio/chinchin/homepage.jpg',
    bgImgM:path + 'lib/image/portfolio/chinchin/m-homepage.jpg',
    bgAfter:[path + 'lib/image/portfolio/chinchin/after-1.jpg',path + 'lib/image/portfolio/chinchin/after-2.jpg',path + 'lib/image/portfolio/chinchin/after-3.jpg',path + 'lib/image/portfolio/chinchin/after-4.jpg'],
    wTech:['react','sass'],
    wSite:'https://chinchin.fr/',
    wDesc:'<p>Our client intend to expand the online market, but not satisfied they existing eshop. Our team revamp The whole site, make it sharp and fresh...</p>'
  }
];
export default {
  name: 'SmartTone',
  props: {
    caseid:0,
    setTimeout:0
  },
  data () {
    return {
      showcases:showcases,
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
    this.$emit('routeViewChange', 3);
  },
  methods: {
    checkInView () {
      this.$emit('checkInView',1);
    },
    routeViewChange () {
      this.$emit('routeViewChange',3);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "src/assets/scss/work.scss";
</style>
