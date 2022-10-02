import { Component } from 'react'

export default class Show extends  Component{
    constructor() {
        super();
        this.state=null
    }
    render(){
        return(
            <>
                <div className={'showDiv'}><span onClick={()=>this.props.toggleHandler(this.props.count)}>Show</span></div>
            </>
        )
    }
}