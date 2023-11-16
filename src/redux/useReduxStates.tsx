import { useSelector } from "react-redux";
import { RootState } from ".";

const useReduxStates = () => {
    const common = useSelector((state: RootState) => state.common);
    return {
        ...common,
    };
};

export default useReduxStates;
