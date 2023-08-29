// initial state
const state = () => ({
    transactions: [],
});

// actions
const actions = {
    async fetchTransactions({ commit }) {
        const response = await fetch('http://localhost:3000/transactions');
        const transactions = await response.json();
        commit('setTransactions', transactions);
    },
};

// mutations
const mutations = {
    setTransactions(state, payload) {
        state.transactions = payload;
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
