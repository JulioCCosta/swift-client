import axios from "axios";

export default{

    state:{
        user:{},
        authenticated:false,
        urlBack:'',
        isVisibleLogin:false,
    },

    mutations:{
        AUTH_USER_OK(state,values)
        {
            state.user = values;
            state.authenticated = true;
        },

         CHANGE_URL_BACK(state, url){
            state.urlBack = url;
        },

          CHANGE_VISIBIBLE(state, value){
            state.isVisibleLogin = value;
        }
    },

    actions:{
        login(context,params)
        {
            
        return axios.post('http://localhost:8000/login', params)
            .then(res =>{
                console.log(res.data);                                                                   
                context.commit('AUTH_USER_OK', res.data.user);                                                  
                let token = res.data

                localStorage.setItem('X-Auth-Token', token);
                window.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                
            }).catch(err => {
				  
				})
           
            
        },
    }





}