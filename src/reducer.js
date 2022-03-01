export const initialState = { // crear estados
    cities: [], //estado inicial de cities
   
}

export const accionType = { // mis accioness

    CITIESDB: "CITIESDB",

}

const reducer = (state, action) => {
   /*  console.log(action); */
    switch (action.type) {
        case "CITIESDB":
            return {
                ...state,
                cities: action.cities
            }      
        default: return state
    }
}

export default reducer;