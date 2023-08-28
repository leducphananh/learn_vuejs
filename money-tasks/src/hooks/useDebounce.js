import { ref, watch } from 'vue';

const useDebounce = (value, delay = 500) => {
    const debouncedValue = ref(value.value);
    let timer = null;

    watch(value, () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            debouncedValue.value = value.value;
        }, delay);
    });

    return debouncedValue;
};

export default useDebounce;
