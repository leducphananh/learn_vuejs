import { ref } from 'vue';

const useTransactions = () => {
    const transactions = ref([]);

    const fetchTransactions = async () => {
        try {
            const response = await fetch('http://localhost:3000/transactions');
            if (response.ok) {
                return (transactions.value = await response.json());
            }
            throw new Error('Something went wrong');
        } catch (err) {
            console.error(err);
        }
    };

    fetchTransactions();

    return { transactions };
};

export default useTransactions;
