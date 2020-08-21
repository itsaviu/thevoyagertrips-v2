import { useStore } from "./store";

export const useLoading = () => {
    const {state, dispatch} = useStore();
    return {
        isLoading: state.isLoading,
        startLoading: () => dispatch({type: "START_LOADING"}),
        stopLoading: () => dispatch({type: "STOP_LOADING"})
    }
};


