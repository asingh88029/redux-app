function updateEmail(payload){
    return {
        type:"UPDATE_EMAIL",
        payload : payload
    }
}

function updatePassword(payload){
    return {
        type:"UPDATE_PASSWORD",
        payload: payload
    }
}

export {
    updateEmail,
    updatePassword
}