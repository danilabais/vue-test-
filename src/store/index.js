import Vue from 'vue'
import Vuex from 'vuex'

import general from '@/store/general'
import queries from '@/store/queries'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    queries,general,
  }
})
