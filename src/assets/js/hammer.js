import hammerjs from 'hammerjs';

export default {
  install: function(Vue,) {
    Object.defineProperty(Vue.prototype, '$hammerjs', { value: hammerjs });
  }
}