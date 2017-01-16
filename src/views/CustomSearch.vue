<template>
    <div>
        <custom-repository-finder />

         <list :response="response" />
    </div>
</template>
<style>
</style>
<script>
    import CustomRepositoryFinder from '../components/CustomRepositoryFinder.vue'
    import List from '../components/List.vue'

    export default {
      name: 'custom-search',
      components: { CustomRepositoryFinder, List },
      computed: {
        response: function () {
          return this.$store.state.response
        }
      }
    }
</script>
