import React, {useState} from 'react';
import {Box} from 'grommet';
import {TextField, Button} from '@material-ui/core';
import {Add} from '@material-ui/icons';

export const ProductForm = (props) => {
    const changeHandler = e => {
        // console.log();
        if (e.target.name === 'inventoryAmount' && e.target.value < 0) {
            e.target.value = 0;
        }
        setAllValues({
            ...allValues,
            [e.target.name]: e.target.value
        })
    }

    const [allValues,
        setAllValues] = useState({productName: '', inventoryAmount: 0});
    return (
        <Box pad="medium">
            
            <TextField // placeholder="type here"
                name="productName" label="Product Name" onChange={changeHandler}/>
            <TextField // placeholder="type here" 
                type="number" name="inventoryAmount" min="0" label="Inventory" onChange={changeHandler}/>
                
            <Button
              variant="contained"
              color="primary"
              startIcon={<Add />}
              style={{marginTop: '1vh'}}
            >
              {allValues.productName ? `Add ${allValues.inventoryAmount} units of ${allValues.productName}` : 'Add'}
            </Button>
        </Box>
    );
}