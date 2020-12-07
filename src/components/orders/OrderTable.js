import React, { Component, useMemo } from 'react';
import { connect } from 'react-redux';
import {TableUI} from '../TableUI';

class OrderTable extends Component {

  render() {
      console.log(this.props.productCollection);
      const columns = [
          {
            Header: 'Order product',
            accessor: 'productName'
          },
          {
            Header: 'Order Amount',
            accessor: 'orderAmount'
          }
        ];
    return (
      <div>
        {this.props.ordersCollection.orders.length > 0 ? <TableUI columns={columns} data={this.props.ordersCollection.orders} /> : ''}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(OrderTable);