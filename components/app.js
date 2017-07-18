import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from '../store'
import Todos from './todos'

ReactDOM.render(
  <Provider store={store}>
    <Todos />
  </Provider>,
  document.getElementById('container')
)
