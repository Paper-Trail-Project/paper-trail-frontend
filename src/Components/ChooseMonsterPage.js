import React, { Component } from 'react'
import Image from '../Images/blank_background.svg'
import '../Styles/ChooseMonster.css'
import MonsterCard from './MonsterCard'


export default class ChooseMonsterPage extends Component {

    state = {
        selectedMonster: [],
        monster_chosen: false,
        monsters: [
            {
                name: "Drop Monster",
                image: "https://i.imgur.com/4q9qAMg.png",
                id: 1
            },
            {
                name: "Star Monster",
                image: "https://i.imgur.com/mPBIm9X.png",
                id: 2
            },
            {
                name: "Robo Monster",
                image: "https://i.imgur.com/HuuRZli.png",
                id: 3
            }
        ]
    }

    handleClick= (monsterObj) => {
            this.setState({selectedMonster: monsterObj})
    }

    handleMonsterUpdate = () => {
        const id = localStorage.id 
        fetch(`http://localhost:8000/users/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                monster_img: this.state.selectedMonster.image
            }), 
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (response.status === 201 || response.status === 200){
                this.setState({monster_chosen: true})
                }
            return response.json()
        }).then(result => {
            localStorage.setItem('monster_img', result[0].monster_img)
        })
        .then(result => this.props.history.push('/home'))
        
    }
    

    render() {
        const divStyle = {
            backgroundImage: 'url(' + Image + ')',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          };

          const displayMonsters = () => {
            return this.state.monsters.map(monster => <MonsterCard handleClick={this.handleClick} key={monster.id} monster={monster} selectedMonster={this.state.selectedMonster} />)
        }    
        return (
            <div  id="choose-monster-page" style={divStyle}>
                <div id="choose-monster-container">
                <ul id="monster-selection">
                    {displayMonsters()}
                </ul>
                <button onClick={this.handleMonsterUpdate}>Choose Monster</button>
                {this.state.monster_chosen ? <p>You picked {this.state.selectedMonster.name}!</p> : null}
                </div>
                
            </div>
        )
    }
}
