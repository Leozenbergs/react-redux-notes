import { Provider } from 'react-redux';

import store from './redux/store';

import Default from './layouts/Default';
import './App.css'
import "./index.css";

function App() {

  return (
    <Provider store={store}>
      <Default />
    </Provider>
  )
}

export default App
