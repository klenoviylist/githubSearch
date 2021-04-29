import { HIDE_ALERT, SHOW_ALERT } from "../types";

// export const alertReducer = (state, action) => {
//    switch(action.type) {
//        case SHOW_ALERT: return action.payload
//        case HIDE_ALERT: return null
//        default: return state
//    }
//  }

// OR:


const handlers  = {
    [SHOW_ALERT]: (state, action) => action.payload,
    [HIDE_ALERT]: () => null,
    DEFAULT: state => state
}

export const alertReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}



