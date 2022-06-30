import React, { Component } from 'react';
import './Footer.css';

// function Footer() {
//   const msgChange = () => {
//     <h5>Thank you for subscribe</h5>;
//   };
//   return (
//     <div>
//       <button onClick={msgChange}>
//         <h1>Click Here</h1>
//         {/* <h1>Click the subscribe button to get any new</h1> */}
//       </button>
//     </div>
//   );
// }

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Click the subscribe button to get any new',
    };
    this.msgChange = this.msgChange.bind(this);
  }

  msgChange() {
    this.setState({
      message: 'Thank you for subscribe',
    });
  }
  render() {
    return (
      <div className="mainFooter">
        <div className="footerHeader">
          <h3>{this.state.message}</h3>
        </div>
        <button className="footerBtn" onClick={this.msgChange}>
          Click Here
        </button>
      </div>
    );
  }
}

export default Footer;
