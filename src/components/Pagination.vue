<template>
  <v-pagination
        v-model="page"
        :length="links.last_page"
        circle
        @input="onPageChange"
      >{{links}}</v-pagination>
</template>

<script>
export default {
    data(){
        return {
            page:null,
        }
    },
    methods: {
        onPageChange() {
           this.$store.dispatch('fetchNews', `?page=${this.page}`)
        }
    },
    computed: {
        links() {
            return this.$store.getters.links
        },
    },
    
}
</script>

<style>

</style>