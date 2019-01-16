import * as types  from "./mutations_types";
import _ from 'underscore'

function findById(state,id){
    return _.findWhere(state.shoppinglists,{id:id});
}

export default{
    [types.CHANGE_TITLE](state,data){
        findById(state,data.id).title=data.title;

    }
}

