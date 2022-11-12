
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import promiseMiddlerware from "redux-promise";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import reducer from "./_reducers";

const createStoreWidthMiddleware = applyMiddleware(
    promiseMiddlerware,
    reduxThunk
  )(createStore);

ReactDOM.render(
        <React.StrictMode>
            <Provider
            store={createStoreWidthMiddleware(
                reducer,
                //개발자 도구를 사용하기 위한 설정
                window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__()
      )}>
                    <App />
            </Provider>
        </React.StrictMode>,
    document.getElementById("root")
);