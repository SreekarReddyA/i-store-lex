import React, {useState} from 'react';
import {Box} from 'grommet';
import {TextField, Button} from '@material-ui/core';
import {Add} from '@material-ui/icons';
import { connect } from 'react-redux';
import {addProduct} from '../../redux/actions/productActions';

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {productName: '', inventoryAmount: 0}
    }
    changeHandler = e => {
        if (e.target.name === 'inventoryAmount' && e.target.value < 0) {
            e.target.value = 0;
        }
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <Box pad="medium">
                
                <TextField name="productName" label="Product Name" onChange={this.changeHandler}/>
                <TextField type="number" name="inventoryAmount" min="0" label="Inventory" onChange={this.changeHandler}/>
                    
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Add />}
                  style={{marginTop: '1vh'}}
                  disabled={this.state.inventoryAmount === 0}
                  onClick={() => {this.props.addProduct(this.state)}}
                >
                  {this.state.productName ? `Add ${this.state.inventoryAmount} units of ${this.state.productName}` : 'Add'}
                </Button>
            </Box>
        );
    }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, { addProduct })(ProductForm);
