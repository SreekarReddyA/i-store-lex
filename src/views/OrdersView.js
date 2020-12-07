import AddItem from '../components/AddItem'
function OrdersView() {
  return (
    <div><AddItem buttonText="Make an order" form={<div>order form goes here</div>}/></div>
  );
}

export default OrdersView;