import Vue from 'vue';
import Vuex from 'vuex';
import { INCREASE, DECREASE } from "./mutation-type";

Vue.use(Vuex);

export default new Vuex.Store({    
    state: {
        count: 0,
    },
    getters: {
        
    },
    mutations: {
        [INCREASE](state, n) {
            state.count += n
        },
        [DECREASE](state, n) {
            state.count -= n
        }
    },
    actions: {

    }
})