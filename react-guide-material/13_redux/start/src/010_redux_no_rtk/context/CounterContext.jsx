import { createContext, useContext, useReducer } from "react";

const CounterContext = createContext();
const CounterDispatchContext = createContext();

// 第一引数：state、第二引数：action
const reducer = (prev, { type, step }) => {
        switch (type) {
          case "+":
            return prev + step;
          case "-":
            return prev - step;
          default:
            throw new Error('不明なactionです。')
        }
      };

const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, 0);
    return (
        <CounterContext.Provider value={state}>
            <CounterDispatchContext.Provider value={dispatch}>
                {children}
            </CounterDispatchContext.Provider>
        </CounterContext.Provider>
    )
}

// contextとreducerを使った場合のProviderの例
// const CounterProvider = ({ children }) => {
//     const [state, dispatch] = useReducer((prev, { type, step }) => {
//         switch (type) {
//           case "+":
//             return prev + step;
//           case "-":
//             return prev - step;
//           default:
//             throw new Error('不明なactionです。')
//         }
//       }, 0);
//     return (
//         <CounterContext.Provider value={state}>
//             <CounterDispatchContext.Provider value={dispatch}>
//                 {children}
//             </CounterDispatchContext.Provider>
//         </CounterContext.Provider>
//     )
// }

const useCounter = () => {
    return useContext(CounterContext);
}

const useCounterDispatch = () => {
    return useContext(CounterDispatchContext);
}

export { CounterProvider, useCounter, useCounterDispatch }