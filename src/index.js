
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import promiseMiddlerware from "redux-promise";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducer from "./_reducers";
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b71adb9e9187a51cc3944295f5391059"></script>
const createStoreWidthMiddleware = applyMiddleware(
    promiseMiddlerware,
    reduxThunk
  )(createStore);

ReactDOM.render(
        <React.StrictMode>
            <Provider
            store={createStoreWidthMiddleware(
                reducer,
      )}>
                    <App />
            </Provider>
        </React.StrictMode>,
    document.getElementById("root")
);