import React from 'react';
import './../App.css';
import Header from './Header';
import Footer from './Footer';

class Homepage extends React.Component {

  render() {
    return (
      <div className="App">
          <Header/>
          <Footer/>
      </div>
      );
  }
}
export default Homepage;