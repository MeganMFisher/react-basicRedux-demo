import React, { Component } from 'react';
import './EditHero.css';

class EditHero extends Component {
  render() {
    return (
        <div className="modal-bg">
            <div className="modal">
            <input
                value={this.props.hero} 
                onChange={this.props.editName}
                className="modal-input"/>
            <input
                value={this.props.power} 
                onChange={this.props.editPower}
                className="modal-input"/>
            <button 
                onClick={this.props.update}
                className="modal-btn">Update</button>
            <button 
                onClick={this.props.hide}
                className="modal-btn">Cancel</button>
            </div>
        </div>
    )
  }
}

export default EditHero;
