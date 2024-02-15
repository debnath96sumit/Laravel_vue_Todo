import axios from "axios";
import { createStore } from "vuex";
const baseURL = 'http://127.0.0.1:8000/api';


const store = createStore({
    state:{
        user:{
            data:{},
            token: localStorage.getItem('TOKEN') ?? null,
            todo: []
        }
    },
    getters:{},
    actions:{
        async register({commit}, data){
            return axios.post(baseURL + '/register', data, {
                headers:{
                    'Content-type' : 'application/json',
                    'Accept' : 'application/json'
                }
            }).then((res) =>{
                commit('setUser', res);
                return res;
            })
            
        },
        async login({commit}, data){
            return axios.post(baseURL + '/login', data, {
                headers:{
                    'Content-type' : 'application/json',
                    'Accept' : 'application/json'
                }
            }).then((res) =>{
                commit('setUser', res);
                return res;
            })
            
        },
        async logout({commit}){
            return axios.post(baseURL + '/logout',{}, {
                headers:{
                    'Content-type' : 'application/json',
                    'Accept' : 'application/json',
                    'Authorization' : `Bearer ${this.state.user.token}`
                }
            }).then((res) =>{
                commit('logout');
                return res;
            })
            
        },

        // CRUD APIS //
        async createOrUpdate({commit}, data){
            return axios.post(baseURL + '/createOrUpdate', data, {
                headers:{
                    'Content-type' : 'application/json',
                    'Accept' : 'application/json',
                    'Authorization' : `Bearer ${this.state.user.token}`
                }
            }).then((res) =>{
                commit('setTodos', res);
                return res;
            })
        },
        async getTodos({commit}, url = null){
            let fetchUrl = baseURL + '/todos';
            if (url) {
                fetchUrl = url;
            }
            return axios.get(fetchUrl, {
                headers:{
                    'Content-type' : 'application/json',
                    'Accept' : 'application/json',
                    'Authorization' : `Bearer ${this.state.user.token}`
                }
            }).then((res) =>{
                commit('setTodos', res);
                return res;
            })
        },
        async deleteTodo({commit}, id){
            return axios.post(baseURL + '/deleteTodo/'+id, {}, {
                headers:{
                    'Content-type' : 'application/json',
                    'Accept' : 'application/json',
                    'Authorization' : `Bearer ${this.state.user.token}`
                }
            }).then((res) =>{
                commit('setTodos', res);
                return res;
            })
        },
        async editTodo({commit}, id){
            return axios.get(baseURL + '/editTodo/'+id, {
                headers:{
                    'Content-type' : 'application/json',
                    'Accept' : 'application/json',
                    'Authorization' : `Bearer ${this.state.user.token}`
                }
            }).then((res) =>{
                if (res.data.success) {
                    return res.data.todo;
                }
                return null;
            })
        },
        async changeCompletedStatus({commit}, id){
            return axios.post(baseURL + '/statusChange/'+id, {}, {
                headers:{
                    'Content-type' : 'application/json',
                    'Accept' : 'application/json',
                    'Authorization' : `Bearer ${this.state.user.token}`
                }
            }).then((res) =>{
                commit('setTodos', res);
                return res;
            })
        }
    },
    mutations:{
        setUser: (state, data) =>{
            state.user.data = data.data.user;
            state.user.token = data.data.token;

            localStorage.setItem('TOKEN', data.data.token)
        },
        setTodos: (state, data) =>{
            state.user.todo = data.data.todos;
        },
        logout: (state)=>{
            state.user.data = {};
            state.user.token = null;
            localStorage.removeItem('TOKEN');
        }
    },

})

export default store;