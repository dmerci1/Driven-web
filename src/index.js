import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import reducers from './reducers'
import ScrollToTop from './components/scroll';
import { loadEvents } from './actions/EventActions';
import registerServiceWorker from './registerServiceWorker';

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
const storeEnhancers = [middlewareEnhancer];
const composedEnhancer = composeWithDevTools(...storeEnhancers);

const store = createStore(
  reducers,
  middlewareEnhancer,
  composedEnhancer
);
store.dispatch(loadEvents());


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
   document.getElementById('root')
);
registerServiceWorker();
