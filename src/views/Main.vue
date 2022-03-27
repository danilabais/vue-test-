<template>
<div>
  <Filters/>
  <Table />
  <Pagination/>
</div>
</template>

<script>
import Pagination from "@/components/Pagination.vue"
import Table from "@/components/Table.vue"
import Filters from '@/components/Filters.vue'

export default {
     name: 'Main',
     components: {
       Table,
       Pagination,
        Filters,
     },
     mounted(){
       this.$store.dispatch('fetchNews')
       this.$store.dispatch('fetchCategories')
     }
}
</script>

<style>

</style>