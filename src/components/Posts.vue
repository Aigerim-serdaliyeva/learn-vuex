<template>
    <div class="posts">
        <div class="post" v-for="post in posts" :key="post.id">
            <h3>{{post.title}}</h3>
            <p>{{post.body}}</p>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            posts: []
        }
    },
    async mounted() {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=3");
            this.posts = response.data  
        }
        catch (e) {
            console.error(e);   
        }
    }
}
</script>

<style scoped>
    
</style>