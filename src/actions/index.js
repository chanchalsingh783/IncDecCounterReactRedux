export const incNumber = (num)=>{
    return {
        type :"INCREMENT",
        payload: num
    }
}

export const decNumber = () =>{
    return {
        type : "DECREMENT"
    }
}

export const mulNumber = (num)=>{
    return {
        type :"MULTIPLY",
        payload: num
    }
}

export const divNumber = () =>{
    return {
        type : "DIVIDE"
    }
}