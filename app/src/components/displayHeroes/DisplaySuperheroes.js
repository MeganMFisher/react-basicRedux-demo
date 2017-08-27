import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeHero, updateHero } from '../../ducks/superheroes';
import EditHero from '../editHero/EditHero';

class DisplaySuperheroes extends Component {
    constructor() {
        super();

        this.state = {
            edit: false,
            heroToEdit: '',
            powerToEdit: '',
            index: 0
        }

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.editName = this.editName.bind;
        this.editPower = this.editPower.bind(this);
        this.updateHeroName = this.updateHeroName.bind(this);
    }

    showModal(hero, power, i) {
        this.setState({
          edit: true,
          heroToEdit: hero,
          powerToEdit: power,
          index: i
        })
      }

    hideModal() {
        this.setState({
          edit: false
        })
    }

    editName(e) {
        this.setState({
          heroToEdit: e.target.value
        })
    }

    editPower(e) {
        this.setState({
          powerToEdit: e.target.value
        })
    }

    updateHeroName() {
        this.props.updateHero(this.state.heroToEdit, this.state.index);
        this.hideModal();
      }

    render() {
    
        const heroes = this.props.heroes.map((hero , i) => {
            return (
            <div key={i}>
                <h4>{ hero.name }</h4>
                <h6>{ hero.power }</h6>
                <button
                      onClick={()=>this.showModal( hero.name, hero.power, i)}
                      >Edit</button>
                <button onClick={()=> this.props.removeHero(i)}>Remove</button>
            </div>
            )
        })
        
        return (
            <div>
                <h1>All the Superheroes</h1>
                    { heroes }
                { this.state.edit ? <EditHero 
                hide={this.hideModal}
                hero={this.state.heroToEdit}
                power={this.state.powerToEdit}
                editName={this.editName}
                editPower={this.editPower}
                update={this.updateHeroName}
                /> : null }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        heroes: state.heroes
    }
}



export default connect(mapStateToProps, {removeHero, updateHero})(DisplaySuperheroes)

