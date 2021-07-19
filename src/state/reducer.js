export const initialState = {
    work: [],
    education: [],
    social: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'setEducation':
            return { ...state, education: payload.data }
        case 'setWork':
            return { ...state, work: payload.data }
        case 'setSocial':
            return { ...state, social: payload.data }
        default:
            return state
    }
}

export default reducer