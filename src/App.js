import React, { useReducer } from 'react';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer,{initialState} from './reducers';
import { clearDisplay,addOne,addMemory ,changeOperator, applyNumber ,clearMemory,readMemory} from './actions';

function App() {

  const [state,dispatch]=useReducer(reducer,initialState);

  const handleAdd= ()=>dispatch(addOne());
  const handleOperator= item=>dispatch(changeOperator(item));
  const handleTotal= item=>dispatch(applyNumber(item));
  const handleMemory= item=>dispatch(addMemory(item));
  const handleMemoryClear= ()=>dispatch(clearMemory());
  const handleMemoryRead= ()=>dispatch(readMemory());
  const handleClear= ()=>dispatch(clearDisplay());

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation: {state.operation}</b></span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={()=>(handleMemory())} />
              <CalcButton value={"MR"} onClick={()=>(handleMemoryRead())}/>
              <CalcButton value={"MC"} onClick={()=>(handleMemoryClear())} />
            </div>

            <div className="row">
              <CalcButton onClick={(item)=>(handleTotal(item.target.value))} value={1} />
              <CalcButton onClick={(item)=>(handleTotal(item.target.value))} value={2} />
              <CalcButton onClick={(item)=>(handleTotal(item.target.value))} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={(item)=>(handleTotal(item.target.value))} value={4} />
              <CalcButton onClick={(item)=>(handleTotal(item.target.value))} value={5} />
              <CalcButton onClick={(item)=>(handleTotal(item.target.value))} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={(item)=>(handleTotal(item.target.value))} value={7} />
              <CalcButton onClick={(item)=>(handleTotal(item.target.value))} value={8} />
              <CalcButton onClick={(item)=>(handleTotal(item.target.value))} value={9} />
            </div>

            <div className="row">
              <CalcButton onClick={()=>(handleOperator("+"))} value={"+"} />
              <CalcButton  value={"*"} onClick={()=>(handleOperator("*"))}/>
              <CalcButton value={"-"} onClick={()=>(handleOperator("-"))} />
            </div>
            <div className="row ce_button">
              <CalcButton  onClick={()=>(handleAdd())} value={"INCREASE"} />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={()=>(handleClear())} value={"CE"} />
            </div>
          

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
