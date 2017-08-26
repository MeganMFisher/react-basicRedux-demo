import React, { Component } from 'react';

class AddSuperhero extends Component {
    constructor(){
        super();

        this.state = {
            newName: '',
            newPower: ''
        }
    }

    render() {
        return (
            <div>
                <h1>Add a Superhero</h1>
                <input />
                <button>Add</button>
            </div>
        )
    }


}

export default AddSuperhero