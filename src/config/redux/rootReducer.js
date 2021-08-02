import * as actionTypes from './actionTypes';

const initialState = {
    userbasedata: {name: 'Guest', role: null},
    resumes: [],
    images: [],
    contributors: [],
    donations: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.USER_LOGGED_DATA:
        return {
            ...state,
            userbasedata: action.data,
        }

        case actionTypes.RESUME_DATA:
        return {
            ...state,
            resumes: action.data,
        }

        case actionTypes.IMAGE_DATA:
        return {
            ...state,
            images: action.data,
        }

        case actionTypes.CONTRIBUTOR_DATA:
            return {
            ...state,
            contributors: action.data,
        }
        
        case actionTypes.DONATION_DATA:
        return {
            ...state,
            donations: action.data,
        }

    default:
        return state;
    }
}

export default rootReducer;