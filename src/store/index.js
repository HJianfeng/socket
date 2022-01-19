import { createStore } from 'vuex';

const defaultState = {
  count: 0,
};

// Create a new store instance.
export default createStore({
  state() {
    return defaultState;
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
  },
  getters: {
    double(state) {
      return 2 * state.count;
    },
  },
});
