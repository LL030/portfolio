import velocity from 'velocity-animate';

export default {
  install: function(Vue,) {
    Object.defineProperty(Vue.prototype, '$velocity', { value: velocity });
  }
}