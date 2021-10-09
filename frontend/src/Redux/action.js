import { LOGOUT, SET_CURRENT_MENTOR, SET_CURRENT_STUDENT, SET_MENTOR, SET_STUDENT } from "./actionTypes"

export const setStudent = (payload) => {
    return {
        type: SET_STUDENT,
        payload
    }
}
export const setMentor = (payload) => {
    return {
        type: SET_MENTOR,
        payload
    }
}
export const setCurrentStudent = (payload) => {
    return {
        type:SET_CURRENT_STUDENT,
        payload
    }
}
export const setCurrentMentor = (payload) => {
    return {
        type:SET_CURRENT_MENTOR,
        payload
    }
}
export const logout = () => {
    return {
        type: LOGOUT
    }
}