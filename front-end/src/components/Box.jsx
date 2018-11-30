import React, {Component} from 'react'
import Input from './Input.jsx'
import axios from 'axios';

class Box extends Component{
    constructor() {
        super()

        this.state = {
            nameEdit: false,
            descriptionEdit: false,
        }
    }

    toggleEdit = (value) => {
        let edit = `${value}Edit`
        this.setState({[edit]: !this.state[edit]})
    }

    render() {
        return (
            <div>
               <div className='name'>
                    <Input  
                        product={this.props.product} 
                        edit={this.state.nameEdit}
                        toggleEdit={this.toggleEdit}
                        updateProp={this.props.updateProp}
                        value='name'
                        />
                </div>
                <div className='description'>
                    <Input  
                        product={this.props.product} 
                        edit={this.state.descriptionEdit}
                        toggleEdit={this.toggleEdit}
                        updateProp={this.props.updateProp}
                        value='description'/>
                </div>
                <img src={this.props.product.image_url} alt=''/>
                <button onClick={() => {this.props.deleteItem(this.props.product.product_id)}}>X</button>
            </div>
        )
    }
}

export default Box;