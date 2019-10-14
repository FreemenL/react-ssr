import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter , Route} from 'react-router-dom';
import Routes from '../Routes';
import { getClientStore } from '../store'
import { Provider } from 'react-redux';

const App = () => {
  return(
    <Provider store={getClientStore()}>
      <BrowserRouter>
        <div>
          { Routes.map((route =>(
            <Route {...route}></Route>
          )))}
        </div>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.hydrate(<App/>,document.getElementById("root"));
