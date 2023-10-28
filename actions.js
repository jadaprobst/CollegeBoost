export const ADD_POINTS = 'ADD_POINTS';

export const addPoints = (amount) => {
    return {
        type: ADD_POINTS,
        payload: amount,
    };
};  