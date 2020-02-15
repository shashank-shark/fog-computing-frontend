import React from 'react';

import FixedNavBar from '../components/navbar/FixedNavBar';

class App extends React.Component {


  componentDidMount() {
    document.title = 'Fog Computing System';
  }

  render() {
    return (
      <FixedNavBar />
    );
  }

}

export default App;
