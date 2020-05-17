import Head from 'next/head';
import React from 'react';
import Router from 'next/router'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { persistor, store } from '../store';


// CSS
import '../style.scss';
import '../static/scss/bootstrap.scss';

import withReduxStore from '../lib/withReduxStore';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    console.log('localStorage', localStorage);
    if (localStorage.getItem('isLoggedIn')) { Router.push('/profile') }
    else { Router.push('/login') }

  }

  render() {
    const { reduxStore } = this.props;
    return (
      // <p>Loading...</p>


      <Provider store={reduxStore}><p>Loading...</p></Provider>


      // <Provider store={store}>
      //   <PersistGate loading={<p>Loading...</p>} persistor={persistor}>

      //   </PersistGate>
      // </Provider>
    )
  }
}


Home = withReduxStore(Home);
export default Home

