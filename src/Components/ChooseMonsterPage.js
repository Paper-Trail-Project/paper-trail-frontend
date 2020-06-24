import React, { Component } from 'react'
import Image from '../Images/blank_background.svg'
import '../Styles/ChooseMonster.css'
import MonsterCard from './MonsterCard'


export default class ChooseMonsterPage extends Component {

    state = {
        selectedMonster: [],
        monsters: [
            {
                name: "sam",
                image: "https://i.imgur.com/4q9qAMg.png",
                id: 1
            },
            {
                name: "jill",
                image: "https://i.imgur.com/mPBIm9X.png",
                id: 2
            },
            {
                name: "bob",
                image: "https://i.imgur.com/HuuRZli.png",
                id: 3
            }
        ]
    }

    handleClick= (monsterObj) => {
            this.setState({selectedMonster: monsterObj})
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
                <button>Choose Monster</button>
                </div>
                
            </div>
        )
    }
}
