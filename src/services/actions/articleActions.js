import { BASE_URL } from "../constants/api"
import { actionTypes } from "./actionTypes"

// define method to fetch all articles from api
export const fetchArticles = () => {
    return (dispatch) => {
        fetch(`${BASE_URL}articles`)
            .then(res => res.json())
            .then(result => dispatch({
                type: actionTypes.fetch_articles,
                data: result.data
            }))
    }
}

export const searchArticles = (title) => {
    return (dispatch) => {
        fetch(`${BASE_URL}articles?filters[title][$containsi]=${title}`)
            .then(res => res.json())
            .then(result => dispatch({
                type: actionTypes.search_articles,
                data: result.data
            }))
    }
}