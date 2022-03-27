import axios from "axios"

export default {
    state: {
        news:[],
        links:[],
        categories:[],
    },
    mutations: {
        SET_NEWS(state,payload){
            state.news = payload
        },
        SET_LINKS(state,payload){
            state.links = payload
        },
        SET_CATEGORIES(state,payload){
            state.categories = payload
        }
    },
    actions: {
        async fetchNews({commit},payload=''){
            await axios.get('https://api.4wr.ru/api/news'+payload).then(response=> {            
            let news = response.data
           // console.log(news.data[0])
            commit("SET_NEWS",news.data)
            commit("SET_LINKS",news.meta)
            })
        },
        async fetchCategories({commit}){
            await axios.get('https://api.4wr.ru/api/categories').then(response=> {            
            let categories = response.data
           // console.log(categories.data[0])
            commit("SET_CATEGORIES",categories.data)
            })
        }
       
    },
    getters: {
        finishedNews: (state) => {
            return state.news.map((el)=> {
                el.category_id = state.categories.find(elem => elem.id === el.category_id).name
                return el;
            })
        },
        links: (state) => state.links,
        categories: (state) => state.categories
    }
}