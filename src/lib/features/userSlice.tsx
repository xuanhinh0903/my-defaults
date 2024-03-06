import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    random: state => {
      state.value = state.value * 7
    },
  }
})

export const { increment, decrement, incrementByAmount, random } = counterSlice.actions

export default counterSlice.reducer