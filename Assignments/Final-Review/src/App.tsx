import CounterUseState from "./Q2-UseReduce/CounterUseState";
import LoginUseReducer from "./Q2-UseReduce/LoginUseReducer";
import LoginUseState from "./Q2-UseReduce/LoginUseState";
import UseReducerSimple from "./Q2-UseReduce/useReducer/1.useReducer";
import SomeReducerApp from "./Q2-UseReduce/useReducer/2.repet";
import UseReducerObj from "./Q2-UseReduce/useReducer/3.useReducerObj";
/**3 */
import Root from "./Q3-Routers/router.root";
import RootUseParams from "./Q3-Routers/usePraams/UseParam";
import NavBar from "./Q3-Routers/navBar";
/** Q1 */
import MemoHooks from "./Q1-Performace/useMemo";

function App() {
  return (
    <>
      <div>
        {/* <Root /> */}

        <RootUseParams />
        {/* <UseReducerObj /> */}
        {/* <MemoHooks /> */}
        {/* <LoginUseState /> */}
        {/* <LoginUseReducer /> */}
        {/* <CounterUseState /> */}
        {/* <UseReducerSimple /> */}

        {/* <SomeReducerApp /> */}
      </div>
    </>
  );
}

export default App;
