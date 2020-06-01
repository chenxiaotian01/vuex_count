import{REQUEST_FAILD,REQUEST_SUCCESS,REQUESTING} from './mutationType'

export const mutations = {
    // 请求中
    [REQUESTING](state){
        state.isFirst = false
        state.isLoading = true
    },
    // 请求成功
    [REQUEST_SUCCESS](state){
        state.isFirst = false
        state.users = users
    },
    // 请求失败
    [REQUESTING](state){
        this.errMsg = msg
        state.isLoading = false
    }
}