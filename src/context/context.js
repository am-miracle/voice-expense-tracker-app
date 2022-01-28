// jshint esversion:9

import  React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{ amount: 500, category: 'Salary', type: 'Income', date: '2020-11-16', id: '44c68123-5b86-4cc8-b915-bb9e16cebe6a' },{ amount: 123, category: 'Car', type: 'Expense', date: '2020-11-16', id: '0f72e66e-e144-4a72-bbc1-c3c92018635e' }];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [ transactions, dispatch ] = useReducer(contextReducer, initialState)

    //Action Creators
    const deleteTransaction = (id) => dispatch({type: 'DELETE_TRANSACTION', payload: id});
    const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction})

    const balance = transactions.reduce((accumulator, currentValue)=> currentValue.type === 'Expense' ? accumulator - currentValue.amount : accumulator + currentValue.amount, 0);

    return(
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}