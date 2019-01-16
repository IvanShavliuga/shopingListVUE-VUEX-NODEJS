import {CHANGE_TITLE} from "./mutations_types"
export default{
    changeTitle:({commit},data)=>{
        commit(CHANGE_TITLE,data)
    }
}