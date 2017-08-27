import React, { Component } from 'react';
import './EditHero.css';

class EditHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   hero: this.props.hero,
    }
    // this.update = this.update.bind(this);
  }


//   update() {
//     // update guest name function
//     this.props.hide();
//   }



  render() {
    return (
        <div className="modal-bg">
            <div className="modal">
            <input
          value={this.props.hero} 
          onChange={this.props.edit}
          className="modal-input"/>
                <button className="modal-btn">Update</button>
                <button 
                onClick={this.props.hide}
                className="modal-btn">Cancel</button>
            </div>
        </div>
    )
  }
}

export default EditHero;
