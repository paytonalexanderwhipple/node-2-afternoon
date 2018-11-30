import React ,{Component} from 'react';
import axios from 'axios';
import Box from './Box.jsx';

class CRUD extends Component {
    constructor() {
        super()
        
        this.state = {
            products: []
        }
    }
    
    componentDidMount = () => {
        this.getProducts()
    }

    getProducts = () => {
        axios.get(`/api/product`)
            .then(res => {
                this.setState({products: res.data})
            })
    }

    deleteItem = (id) => {
        axios.delete(`/api/product/${id}`)
            .then(res => {
                this.setState({products: res.data})
            })
    }

    updateProp = (value, id, prop) => {
        if (value) {
            let body = {value}
            axios.put(`/api/product/${id}/${prop}`, body)
                .then(res => {
                    this.setState({products: res.data})
                })
        }
    }

    render() {

        let products = this.state.products.map((product, i) => {
            return (
                <Box key={i} 
                    product={product}
                    deleteItem={this.deleteItem}
                    updateProp={this.updateProp}/>
            )
        })
        

        return (
            <div>
                {products}
            </div>
        )
    }
}

export default CRUD;