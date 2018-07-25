import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import 'semantic-ui-css/semantic.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './index.css';
import { StoreConfig } from './StoreConfig';
import App from './App';
import reducers from './reducers';
import ScrollToTop from './components/scroll';
import registerServiceWorker from './registerServiceWorker';

const store = StoreConfig();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
      <ReduxToastr
        position='bottom-right'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
      />

        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
   document.getElementById('root')
);
registerServiceWorker();
