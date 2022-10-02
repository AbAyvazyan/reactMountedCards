import './App.css';

import { Component } from 'react'
import Card from './Components/Card/'
import Show from  './Components/Show/'

export default class App extends Component{
  constructor() {
    super();
    this.state={
        cardsArray:[1,2,3,4,5,6],
        cardsAbouts:{
            1:{unmounted:false,
               unmountCount:0, },
            2:{unmounted:false,
               unmountCount:0 },
            3:{unmounted:false,
               unmountCount:0 },
            4:{unmounted:false,
               unmountCount:0 },
            5:{unmounted:false,
               unmountCount:0 },
            6:{unmounted:false,
               unmountCount:0 },

        },
        showFlag:true,
    }
  }


    deleteShowButtonToggler = (number)=>{
        this.setState({cardsAbouts:{...this.state.cardsAbouts,[number]:{unmounted:!this.state.cardsAbouts[number].unmounted,
                                                                unmountCount:this.state.cardsAbouts[number].unmountCount }
                            }})
    }

    unmountCountIncreaser = (number)=>{
        this.setState({cardsAbouts:{...this.state.cardsAbouts,[number]:{unmounted:this.state.cardsAbouts[number].unmounted,
                    unmountCount:this.state.cardsAbouts[number].unmountCount + 1 }
            }})
    }

    reportButtonHandler = () =>{
        for (let i = 1; i <= this.state.cardsArray.length; i++) {
            console.log(`Card with number ${i} was unmounted ${this.state.cardsAbouts[i].unmountCount} times`)
        }
    }



  render(){
    return(
        <>
            <div className={'componentsDiv'}>
            {this.state.cardsArray.map((eachCard,index) => {
                return !this.state.cardsAbouts[eachCard].unmounted
                    ?<Card key={index} count={eachCard} increaser={this.unmountCountIncreaser} deleteHandler={this.deleteShowButtonToggler}/>
                    :<Show key={index} toggleHandler={this.deleteShowButtonToggler} count={eachCard}/>
            })}


            </div>
            <button className={'reportButton'} onClick={this.reportButtonHandler}>Report</button>
        </>
    )
  }
}