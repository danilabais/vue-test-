<template>
<div>
  <v-simple-table >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              ID
            </th>
            <th class="text-left">
              фото
            </th>
             <th class="text-left">
              категорию
            </th>
             <th class="text-left">
              название
            </th>
             <th class="text-left">
              описание
            </th>
             <th class="text-left">
              редактировать
            </th>
            
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in news"
            :key="item.id"
          >
            <td>{{item.id}}</td>
            <td><v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="65px"
                max-width="65px"
                src="https://picsum.photos/id/11/500/300"
                ></v-img></td>
            <td>{{item.category_id}}</td>
            <td class="text-scroll">{{item.name}}</td>
            <td class="text-scroll">{{item.text}}</td>
            <td><Button-edit/></td>
        
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-btn v-on:click="test">click</v-btn>
</div>
</template>

<script>
import ButtonEdit from './ButtonEdit.vue';
export default {
  components: { ButtonEdit },
    data(){
        return {
           
        }
    },
    methods:{
        
    },
    computed: {
        news() {
          return this.$store.getters.finishedNews
          
        },
        categories() {
            return this.$store.getters.categories;
        },
        

        
        

  },
    
}
</script>

<style scoped lang='scss'>
    tr {

        .text-scroll {
           white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 10px;
        }
    }
</style>>

