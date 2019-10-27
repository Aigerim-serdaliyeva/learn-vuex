<template>
  <div id="app">
    <Posts />
    <hr>
    <h2>{{count}}</h2>
    <button @click="increase">Increase</button>
    <button @click="decrease">Decrease</button> 
    <br>
    <input type="number" placeholder="" v-model.number="increment">
  </div>
</template>

<script>
// import {mapState} from 'vuex'
import Posts from "./components/Posts"
import {INCREASE, DECREASE} from "./store/mutation-type"

export default {
  name: 'app',
  data() {
    return {
      increment: 1
    }
  },
  components: {
    Posts
  },
  computed: {
    count: function() {
      return this.$store.state.count;
    }
    // ...mapState(["count"])
  },
  methods: {
    increase() {
      this.$store.commit(INCREASE, this.increment)
    }, 
    decrease() {
      this.$store.commit(DECREASE, this.increment)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
