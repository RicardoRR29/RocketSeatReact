import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string,
}


// interface TransactionsInput {
//     title: string,
//     amount: number,
//     type: string,
//     category: string,
// }

// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput)=> void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(TransactionInput: TransactionInput) {
        const response = await api.post('/transactions', {
            ...TransactionInput,
            createdAt: new Date
        })
        const { transaction } = response.data

        setTransactions([
            ...transactions,
            transaction,
        ])
    }
    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext)

    return context
}