import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    creditAmount:0,
    debitAmount:0,
    debtAmount: 0,
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
        addLastTransactions: (state, action) => {
            state.lastTransactions = action.payload;
        }
    }

})