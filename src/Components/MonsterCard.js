import React, { Component } from 'react'
import { findByLabelText } from '@testing-library/react'

export default class MonsterCard extends Component {


    handleCardClick = () => {
        this.props.handleClick(this.props.monster)
    }

    render() {

        const imageLarge = {
          backgroundColor: "grey",
          border: "3px solid black"
        }

        return (
            <div onClick={this.handleCardClick} id="monster-card-container" style={this.props.monster.id === this.props.selectedMonster.id ? imageLarge: null}>
                <img src={this.props.monster.image} alt={this.props.monster.name}/>
            </div>
        )
    }
}
