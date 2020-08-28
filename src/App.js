import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import PostList from './components/PostList';
import thunk from 'redux-thunk'

const store = createStore(reducers, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <div className="ui container">
        <PostList />
      </div>
    </Provider>
  );
}

export default App;
