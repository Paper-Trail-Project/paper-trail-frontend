import React, { Component } from 'react'

export default class MonsterCard extends Component {

    handleCardClick = () => {
        this.props.handleClick(this.props.monster)
    }

    render() {

        const fontStyled = {
            color: "green", 
            fontSize: "20px",
        }

        return (
            <div onClick={this.handleCardClick} id="monster-card-container" style={this.props.monster.id === this.props.selectedMonster.id ? fontStyled : null}>
                <h1>{this.props.monster.name}</h1>
            </div>
        )
    }
}
