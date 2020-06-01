import axios from 'axios'
import {REQUEST_FAILD,REQUEST_SUCCESS,REQUESTING} from './mutationType'

export const actions = {
    async search({commit},searchName){
        commit(REQUESTING)
        try {
            let response = await axios({
                    url:'https://api.github.com/search/users',
                    method:'GET',
                    params:{
                        q:searchName
                    }
                })
                let users = []
                    response.data.items.forEach(item =>{
                        let user_name = item.login
                        let user_img = item.avatar_url
                        let user_url = item.url
                        let obj = {
                          user_name,
                          user_url,
                          user_img
                        }
                        users.push(obj)
                    })
                    commit(REQUEST_SUCCESS,users)
                }catch(error){
                    commit(REQUEST_FAILD,error.massage)
                }
            }
        }
    