import React ,{Component} from 'react'

class Input extends Component {
    constructor() {
        super() 

        this.state = {
            userInput: ""
        }
    }

    handleInput = (event) => {
        this.setState({userInput: event.target.value})
    }

    render() {

        let render;

        if (this.props.edit) {
            render = (
                <div>
                    <input type="text" 
                        placeholder={this.props.product[this.props.value]}
                        onChange={this.handleInput}/>
                    <button onClick={(event) => {
                        this.props.updateProp(this.state.userInput, this.props.product.product_id, this.props.value)
                        this.props.toggleEdit(this.props.value)
                        }}>
                            Submit
                    </button>
                    <button onClick={(event) => {this.props.toggleEdit(this.props.value)}}>x</button>
                </div>
            )
        } else {
            render = (
                <div onClick={(event) => {
                    this.props.toggleEdit(this.props.value)
                    }}>
                    {`${this.props.value.toUpperCase()}`}: {this.props.product[this.props.value]}
                </div>
            )
        }

        return (
            <div>
                {render}
            </div>
        )
    }
}
    
export default Input;