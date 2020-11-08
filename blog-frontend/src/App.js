
import { Fragment } from 'react';
import './App.css';
import Dashboard from './components/dashboard.js';

function App() {
  return (
    <Fragment>
    {/*<Provider store={store}>
      <Header /> */}
        <div className="container">
            <Dashboard></Dashboard>
        </div>
        
</Fragment>
  );
}

export default App;
