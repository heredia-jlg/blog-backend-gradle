
import { Fragment } from 'react';
import './App.css';
import Dashboard from './components/dashboard.js';
import store from './store.js';
import {Provider} from 'react-redux';

function App() {
  return (
    <Fragment>
    <Provider store={store}>
        <div className="container">
            <Dashboard></Dashboard>
        </div>
    </Provider>
</Fragment>
  );
}

export default App;
