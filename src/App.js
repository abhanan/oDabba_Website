import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Footer from './components/Footer/Footer';
import PackageCard from './components/Cards/PackageCard'
import MainContent from './components/MainContent'
import MenuShow from './components/MenuShow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div role="main" style={{paddingTop:"87px"}}>
        <MainContent/>
        <h1 className="fontsMainContent">A week with us looks like</h1>
        <MenuShow />
        <div className="container">
          <div className="row">
            <div className="col-sm-6 p-2">
              <PackageCard title="Weekly Package" subtitle="27 days" description="This is some description!" btnText="Subscribe"/>
            </div>
            <div className="col-sm-6 p-2">
              <PackageCard title="Weekly Package" subtitle="29 days" description="This is some description!" btnText="Subscribe" />
              </div>
              <div className="col-sm-6 p-2">
              <PackageCard title="Weekly Package" subtitle="32 days" description="This is some description!" btnText="Subscribe" />
              </div>
          </div>
        </div>
        <Footer />
        </div>

      </div>
    );
  }
}

export default App;
