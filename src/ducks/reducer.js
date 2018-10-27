const INITIAL_STATE = {
    users: ''
};

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT"

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOG_IN:
            return {...state, users: action.payload};

        case LOG_OUT:
            return {users: ''}

        default: return state;
    }
};

export function logIn(user){
    return {
        type: LOG_IN, 
        payload: user
    }
}

export function logOut(){
    return{
        type: LOG_OUT,
    }
}

