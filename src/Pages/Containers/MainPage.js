import React, { Component } from 'react';
import SideBar from '../SideBar/SideBar'
import Footer from './Footer'


class MainPage extends Component {
  render() {
    return (
        <div>
               <div className="container-fluid">
                      <div className="row content">

                            <SideBar />
                        <div className="col-sm-9">
                         {this.props.children}
                        </div>
                  </div>
        </div>
                <Footer />
        </div>
    );
  }
}

export default MainPage;