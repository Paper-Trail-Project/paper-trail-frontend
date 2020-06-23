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
                id: 1
            },
            {
                name: "jill",
                id: 2
            },
            {
                name: "bob",
                id: 3
            }
        ]
    }

    handleClick= (monsterObj) => {
        console.log(monsterObj)
        if(this.state.checked){
            this.setState({
                checked: false,
            })
        }else{
            this.setState({
                checked: true,
                selectedMonster: monsterObj
            })
        }
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
