import { createSlice } from "@reduxjs/toolkit";

interface intialStateType {
    value: number
}
const initialState: intialStateType = {
    value: 0
}
export const counter = createSlice({
    name: "counter",
    initialState,
    reducers: {
        reset: () => initialState,
        increment: (state) => { state.value += 1 },
        decrement: (state) => {
            state.value === 0 ? state.value = 0 : state.value -= 1
        },
        incrementByAmount: (state, action) => { state.value += action.payload },
        decrementByAmount: (state, action) => { state.value -= action.payload }
    }
})

export const { reset, increment, decrement, incrementByAmount, decrementByAmount } = counter.actions

export default counter.reducer