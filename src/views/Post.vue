<template>
  <div class="flex flex-col-reverse">
    <div v-if="this.post !== 'loading'" class="container mx-auto mt-4 bg-white text-center shadow-md p-2">
      <h1 class="text-2xl pb-2 text-blue-700">{{post.title}}</h1>
      <p> {{post.content}} </p>
      <aside class="text-sm pt-4 text-gray-600">{{new Date(post.date).toDateString() }}</aside>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/database'
export default {
  name: 'blog',
  components: {
  },
  data () {
    return {
      post: 'loading'
    }
  },
  mounted () {
    firebase.database().ref('/posts/' + this.$route.params.id).once('value', (snapshot) => {
      this.post = snapshot.val()
    })
  }
}
</script>
