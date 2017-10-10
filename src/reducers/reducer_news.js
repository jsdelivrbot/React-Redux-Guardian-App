import { NEWS_SEARCHES, FETCH_NEWS, SET_NEWS, DELETE_NEWS } from '../actions/index'


export default function (state = {
    articles: [],
    searches: [],
    display: 0
}, action) {

    switch (action.type) {
        case FETCH_NEWS: {
            return {
                ...state,
                articles: [action.payload.data.response.results, ...state.articles],
            }
        }

        case NEWS_SEARCHES: {
            return {
                ...state,
                searches: [action.payload, ...state.searches]
            }
        }

        case SET_NEWS: {
            return {
                ...state,
                display: action.payload
            }
        }

        case DELETE_NEWS: {
            let index = action.payload
            return {
                ...state,
                articles: [...state.articles.slice(0, index), ...state.articles.slice(index + 1)],
                searches: [...state.searches.slice(0, index), ...state.searches.slice(index + 1)],
                display: 0

            }
        }

    }

    return state
}