/* eslint-disable no-unused-vars */
import React from 'react';

// import Routes
import Routes from '../routes/routes';

class App extends React.Component {


  componentDidMount() {
    document.title = 'Fog Computing System';
  }

  render() {
    return (
      <Routes />
    );
  }

}

export default App;
