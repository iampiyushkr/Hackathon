import { loadData, saveData } from "../Utils/localstorage";
import { LOGOUT, SET_CURRENT_MENTOR, SET_CURRENT_STUDENT, SET_MENTOR, SET_STUDENT } from "./actionTypes";


export const hawkEyeReducer = (state = initState, { type, payload }) => {
    // console.log(state);
    switch (type) {
        default: return state
        case SET_STUDENT:
            const stateObj1 = {
                ...state,
                mentor:{},
                studentLoggedIn: true,
                student: payload
            }
            saveData("hawkeye", stateObj1);
            return stateObj1;
        case SET_MENTOR:
            const stateObj2 = {
                ...state,
                student:{},
                mentorLoggedIn: true,
                mentor: payload
            }
            saveData("hawkeye", stateObj2);
            return stateObj2;
        case SET_CURRENT_STUDENT:
            const stateObj3 = {
                ...state,
                currentStudent: payload
            }
            saveData("hawkeye", stateObj3);
            return stateObj3;
        case SET_CURRENT_MENTOR:
            const stateObj4 = {
                ...state,
                currentMentor: payload
            }
            saveData("hawkeye", stateObj4);
            return stateObj4;
        case LOGOUT:
            const stateObj5 = {
                ...state,
                studentLoggedIn: false,
                mentorLoggedIn: false,
                student: {},
                mentor: {},
                currentStudent: {},
                currentMentor:{}
            }
            saveData("hawkeye", stateObj5);
            return stateObj5;
    }
}



const data = {
    studentLoggedIn:false,
    mentorLoggedIn:false,
    student: {},
    mentor: {},
    currentStudent: {},
    currentMentor:{}
}
const initState = loadData("hawkeye") || data;