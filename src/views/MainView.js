import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Storefront from '@material-ui/icons/Storefront';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import OrdersView from './OrdersView';
import ProductsView from './ProductsView';
import {getMainViewStyles, a11yProps} from '../services/uiServices'
import TabPanel from '../components/TabPanel'



export default function MainView() {
  const classes = getMainViewStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          aria-label="iLex Store"
        >
          <Tab icon={<Storefront />} aria-label="products" {...a11yProps(0)} />
          <Tab icon={<ShoppingBasketIcon />} aria-label="orders" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ProductsView/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OrdersView/>
      </TabPanel>
    </div>
  );
}