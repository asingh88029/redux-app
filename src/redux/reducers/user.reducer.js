const initialState = {
    email : "",
    password : ""
}

const userReducer = (state = initialState, action)=>{

    switch(action.type){

        case "UPDATE_EMAIL":
            return {...state, email : action.payload}

        case "UPDATE_PASSWORD":
            return {...state, password : action.payload}

        default:
            return state

    }

}

export default userReducer;