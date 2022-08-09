import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greeting from "./Greeting"
import { Provider } from 'react-redux';
import  store  from "../redux/configureStore";
class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
      <Router>
            <Routes>
              <Route path="/" element={<Greeting />} />
            </Routes>
          </Router>
      </Provider>
    );
  }
}

export default App
