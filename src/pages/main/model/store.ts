import { createApi, createStore } from 'effector';
 
interface Store {
    currentIndex: number,
    sum: number
}

export const $store = createStore<Store>({
    currentIndex: 0,
    sum: 0
});

export const api = createApi($store, {
    reset: (state) => ({ ...state, currentIndex: 0 }),
    moveOn: (state) => ({ ...state, currentIndex: state.currentIndex + 1 }),
    toSum: (state, chain) => ({
        ...state,
        sum: state.sum + chain[state.currentIndex],
        currentIndex: 0
    }), 
});
