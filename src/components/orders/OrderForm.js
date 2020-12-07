import React, {useState} from 'react';
import {Box, RangeInput} from 'grommet';
import {TextField, Button} from '@material-ui/core';
import {Add} from '@material-ui/icons';
import { connect } from 'react-redux';
import {Dropdown, Input} from 'semantic-ui-react';
import {addOrder} from '../../redux/actions/orderActions';
import {updateProductInventory} from '../../redux/actions/productActions';

class OrderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {productName: '', orderAmount: 1}
    }

    changeHandler = e => {
        if (e.target.name === 'orderAmount' && e.target.value < 0) {
            e.target.value = 0;
        }
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    dropdownChange = (event, data) => {
        this.setState({
            ...this.state,
            [data.name]: data.value
        })
    }

    rangeChange = e => {
        console.log(e.target.value);
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    addOrderHandler = () => {
        this.props.updateProductInventory({
            productName: this.state.productName,
            orderAmount: this.state.orderAmount
        })
        this.props.addOrder({
            productName: this.state.productName,
            orderAmount: this.state.orderAmount,
            orderDate: new Date()
        });
    }

    render() {
        const productOptions = this.props.productCollection.products.map(prod => ({
            key: prod.productName,
            value: prod.productName,
            text: prod.productName
        }));
        return (
            <Box pad="medium">
                <Dropdown
                    placeholder='Select product'
                    fluid
                    search
                    selection
                    name="productName"
                    onChange={this.dropdownChange}
                    options={productOptions}
                />
                <br/>
                <div style={{display: 'flex'}}>
                <Input
            label="Order Amount"
            min={1}
            max={this.state.productName!=='' ? this.props.productCollection.products.filter(prod => prod.productName === this.state.productName)[0].inventoryAmount : 0}
            name='orderAmount'
            onChange={this.changeHandler}
            disabled={this.state.productName===''}
            type='range'
            value={this.state.orderAmount}
          />
          <Input
            min={1}
            max={this.state.productName!=='' ? this.props.productCollection.products.filter(prod => prod.productName === this.state.productName)[0].inventoryAmount : 0}
            disabled={this.state.productName===''}
            name='orderAmount'
            onChange={this.changeHandler}
            type='number'
            value={this.state.orderAmount}
          />
          </div>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Add />}
                  style={{marginTop: '1vh'}}
                  disabled={this.state.productName === ''}
                  onClick={this.addOrderHandler}
                >
                  {this.state.productName ? `Order ${this.state.orderAmount} units of ${this.state.productName}` : 'Order'}
                </Button>
            </Box>
        );
    }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, {addOrder, updateProductInventory})(OrderForm);
