import Header from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import routerProps from "./_helpers/routerProps";
import { Route, Routes } from 'react-router-dom';
import Page404 from "./pages/Page404/Page404";
import { Provider } from 'react-redux';
import {store} from "./_helpers/store";

export const dispatch = store.dispatch;
function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Header/>
              <Routes>
                  <Route {...routerProps.homePage} />
                  <Route path="*" element={<Page404 />} />
              </Routes>

          </BrowserRouter>
      </Provider>
  );
}

export default App;
