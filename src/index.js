
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store";
import { composeWithDevTools } from "redux-devtools-extension";

// store 생성(reducer,devtools 연결)
const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
//provier 컴포넌트로 store 에 접근
    <Provider store={store}> 
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);