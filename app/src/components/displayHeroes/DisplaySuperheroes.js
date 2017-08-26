import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplaySuperheroes extends Component {
    render() {
        console.log(this.props.heroes)
    
        const heroes = this.props.heroes.map((hero , i) => {
            return (
            <div key={i}>
                <h4>{ hero.name }</h4>
                <h6>{ hero.power }</h6>
            </div>
            )
        })
    
        return (
            <div>
                <h1>All the Superheroes</h1>
                    { heroes }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        heroes: state.heroes
    }
}



export default connect(mapStateToProps)(DisplaySuperheroes)

