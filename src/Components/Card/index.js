import { Component } from 'react'
import deleteIcon from '../../delete.png'

export default class Card extends Component{
    constructor(props) {
        super(props);
        this.state={
            name:'Hello Card',
            deleteCount:0,
        }
    }


componentWillUnmount() {
        this.props.increaser(this.props.count)
}

    render(){
        return(
            <>
                    <div className={'cardWithNumber'}>
                        {this.props.count}
                        <img src={deleteIcon} className={'deleteButton'}  name={this.props.count} onClick={()=>this.props.deleteHandler(this.props.count)}/>
                    </div>
           </>
        )
    }

}