import AddItem from '../components/AddItem'
import {ProductForm} from '../components/products/ProductForm'

function ProductsView() {
  return (
    <div><AddItem buttonText="Add a product" form={ProductForm()}/></div>
  );
}

export default ProductsView;