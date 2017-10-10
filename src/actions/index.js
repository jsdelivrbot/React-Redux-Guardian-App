import axios from 'axios';

const API_KEY = '6d8bf026-b63f-446b-b83d-8b4061b8a480';
const ROOT_URL = `https://content.guardianapis.com/search?q`;

export const FETCH_NEWS = 'FETCH_NEWS';
export const NEWS_SEARCHES = 'NEWS_SEARCHES';
export const SET_NEWS = 'SET_NEWS';
export const DELETE_NEWS = 'DELETE_NEWS';


export function fetchNews(term) {
    return function (dispatch) {

        const url = `${ROOT_URL}=${term}&show-fields=starRating,headline,thumbnail&api-key=${API_KEY}`

        axios.get(url)
            .then((response) => {
                dispatch({
                    type: FETCH_NEWS,
                    payload: response
                })

            })
            .then(function () {
                dispatch({
                    type: NEWS_SEARCHES,
                    payload: term
                })
            })
    }

}

export function setNews(i) {
    return {
        type: SET_NEWS,
        payload: i
    }
}

export function deleteNews(i) {
    return {
        type: DELETE_NEWS,
        payload: i

    }

}

