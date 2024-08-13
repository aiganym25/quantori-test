import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './_helpers/store';
import Root from "./_helpers/Root";

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Root/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
