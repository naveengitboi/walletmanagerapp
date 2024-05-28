import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    creditAmount:0,
    debitAmount:0,
    debtAmount: 0,
    totalAmount: 0,
    transactions: [],
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
        addTransactions: (state, action) => {
            state.transactions = action.payload;
        }
    }

})

export const { addCreditAmount, addDebitAmount, addDebtAmount, addTransactions, getTotalAmount } = transactionSlice.actions;

export default transactionSlice.reducer