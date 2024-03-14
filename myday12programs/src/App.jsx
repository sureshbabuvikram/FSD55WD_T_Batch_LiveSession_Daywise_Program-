import React from 'react';
import { Provider } from 'react-redux';
import { productStore } from './features/Example2ReduxOp/ProductStore';
import Card from './components/Example2Redux/Card';
// import { operationStore } from './features/OperationStore';
// import DisplayReduxState from './components/DisplayReduxState';
// import UpdateReduxState from './components/UpdateReduxState';

const App = () => {
  return (
    <div>
      <h1> App Comp</h1>
      {/* <Provider store={operationStore}>
            <DisplayReduxState />
            <UpdateReduxState />
      </Provider> */}

      {/* eg:2 */}
      <Provider store={productStore} >
          <Card />
      </Provider>
    </div>
  );
};

export default App;