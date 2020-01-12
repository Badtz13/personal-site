<template>
  <div class="flex flex-col-reverse">
    <a
      v-for="(post, key) in posts"
      :key="post.title"
      :href="'post/' + key"
      class="container mx-auto mt-4 bg-white text-center shadow-md p-2 hover:shadow-lg"
    >
      <h1 class="text-2xl pb-2 text-blue-700">{{post.title}}</h1>
      <p>{{post.content}}</p>
      <aside class="text-sm pt-4 text-gray-600">{{new Date(post.date).toDateString() }}</aside>
    </a>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/database'
export default {
  name: 'blog',
  components: {},
  data () {
    return {
      posts: {}
    }
  },
  mounted () {
    firebase
      .database()
      .ref('/posts')
      .orderByChild('date')
      .once('value', snapshot => {
        this.posts = snapshot.val()
      })
  }
}
</script>
