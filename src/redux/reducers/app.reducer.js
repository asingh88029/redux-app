const initialState = {
    language: "english",
    mode: "light"
}

const appReducer = (state = initialState, action)=>{

    switch(action.type){

        case "TOGGLE_THEME":
            return { ...state, mode : state.mode=="light" ? "dark" : "light"}

        case "CHANGE_LANGUAGE":
            return {...state, language :  action.payload}

        default:
            return state

    }

}

export default appReducer;