<template>
  <div id="app">
    <FormPost />
    <hr>
    <h1>{{postCount}}</h1>
    <div class="post" v-for="post in validPosts" :key="post.id">
      <h3>{{post.title}}</h3>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
import FormPost from './components/FormPost.vue'
import {mapGetters, mapActions} from "vuex"

export default {
  name: 'app',
  computed: mapGetters(['validPosts', 'postCount']),
  methods: mapActions(["fetchPosts"]),
  async mounted() {
    this.fetchPosts(3)
  },
  components: { FormPost }
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

.post {
  border: 1px solid #ccc;
  padding: 10px;
  width: 400px;
  margin: 20px auto;

}
</style>
