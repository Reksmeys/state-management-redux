import { actionTypes } from "../actions/actionTypes";
const initState = {
    articles: [{
        id: 0,
        attributes: {
            title: ""
        }
    }]
}

// check action and state
export const articleReducer = (state = initState, action) => {
    switch(action.type){
        case actionTypes.fetch_articles:
            return {...state, articles: action.data}
        case actionTypes.search_articles: 
            return {...state, articles: action.data}
        default: 
            return state
    }
}