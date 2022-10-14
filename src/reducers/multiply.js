const initialState = 5;
const multiplyTheNumber = (state = initialState, action) =>{
     switch (action.type) {
        case "MULTIPLY" : return state * action.payload;
        case "DIVIDE" : return state / 5;
        default: return state;
     }
}
export default multiplyTheNumber;  