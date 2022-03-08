export const initialState = { // crear estados
    cities: [], //estado inicial de cities
    user: null,
   
}

export const accionType = { // mis accioness
    CITIESDB: "CITIESDB",
    USERDB: "USERDB",

}

const reducer = (state, action) => {
    console.log(action); 
    switch (action.type) {
        case "CITIESDB":
            return {
                ...state,
                cities: action.cities
            }
            case "USERDB":
                return {
                    ...state,
                    user: action.user
                }
                                    
        default: return state
    }
}

export default reducer;