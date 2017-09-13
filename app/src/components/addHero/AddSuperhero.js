import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addHero } from '../../ducks/superheroes';

class AddSuperhero extends Component {
    constructor(){
        super();

        this.state = {
            newName: '',
            newPower: ''
        }

        this.addNewName = this.addNewName.bind(this)
        this.addNewPower = this.addNewPower.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    addNewName(e) {
        this.setState({
            newName: e.target.value
        })
    }

    addNewPower(e) {
        this.setState({
            newPower: e.target.value
        })
    }

    handleClick() {
        var newHero = {
            name: this.state.newName,
            power: this.state.newPower
        }
        this.props.addHero(newHero)
    }

    render() {
        return (
            <div>
                <h1>Add a Superhero</h1>
                <input onChange={ this.addNewName }placeholder='Name'/>
                <input onChange={ this.addNewPower } placeholder='Power'/>
                <button onClick={ this.handleClick }>Add</button>
            </div>
        )
    }


}

export default connect(null, {addHero: addHero})(AddSuperhero)