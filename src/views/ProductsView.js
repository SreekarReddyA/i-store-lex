import AddItem from '../components/AddItem'
import ProductForm from '../components/products/ProductForm';
import ProductTable from '../components/products/ProductTable'

function ProductsView() {
  return (
    <div>
        <AddItem buttonText="Add a product" form={<ProductForm/>}/>
        <ProductTable/>
    </div>
  );
}

export default ProductsView;