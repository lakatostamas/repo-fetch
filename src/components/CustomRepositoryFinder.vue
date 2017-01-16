<template>
  <div>
    <input type="text" @change="fetch({uri})" v-model="query" />
    <p>Fetching github libaries: {{ query }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'custom-repository-finder',
  data () {
    return {
      query: ''
    }
  },
  computed: {
    uri () {
      return `https://api.github.com/users/${this.query}/repos?sort=updated`
    }
  },
  methods: {
    ...mapActions(['fetch'])
  }
}
</script>

<style scoped>

</style>
