import { useCounterDispatch } from "../context/CounterContext";
import { useDispatch } from "react-redux";

const CounterButton = ({calcType, step}) => {
    
    // const dispatch = useCounterDispatch();
    
    // イベントハンドラー
    const dispatch = useDispatch();
    const clickHandler = () => {
        // actionをdispatchに渡し、storeに送る
        dispatch({ type: calcType, step });
    }

    return <button onClick={clickHandler}>{calcType}{step}</button>
}
export default CounterButton;