import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    creditAmount:0,
    debitAmount:0,
    debtAmount: 0,
    totalAmount: 0,
    lastTransactions: [],
}
const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {
        addCreditAmount: (state, action) => {
            state.creditAmount = action.payload;
        },
        addDebitAmount: (state, action) => {
            state.debitAmount = action.payload;
        },
        addDebtAmount: (state, action) => {
            state.debtAmount = action.payload;
        },
        getTotalAmount:(state) => {
            state.totalAmount = state.creditAmount + state.debitAmount;
        },
        addLastTransactions: (state, action) => {
            state.lastTransactions = action.payload;
        }
    }

})

export const { addCreditAmount, addDebitAmount, addDebtAmount, addLastTransactions, getTotalAmount } = transactionSlice.actions;

export default transactionSlice.reducer