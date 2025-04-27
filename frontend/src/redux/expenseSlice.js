import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name:"expense",
    initialState: {
        category:"",
        markAsDone:"",
        expenses:[]
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        markAsDone: (state, action) => {
            state.markAsDone = action.payload;
            },
            setExpenses:(state, action) =>{
                state.expenses = action.payload;
            }
    }





});
export const {
    setCategory,
    markAsDone,
    setExpenses


} = expenseSlice.actions;
export default expenseSlice.reducer;