import React, { Component, useMemo } from 'react';
import { connect } from 'react-redux';
import {TableUI} from '../TableUI';

class ProductTable extends Component {

  render() {
      console.log(this.props.productCollection);
      const columns = [
          {
            Header: 'Product',
            accessor: 'productName'
          },
          {
            Header: 'Inventory',
            accessor: 'inventoryAmount'
          }
        ];
    return (
      <div>
        {this.props.productCollection.products.length > 0 ? <TableUI columns={columns} data={this.props.productCollection.products} /> : ''}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ProductTable);