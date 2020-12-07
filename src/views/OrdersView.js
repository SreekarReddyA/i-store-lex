import AddItem from '../components/AddItem'
import OrderForm from '../components/orders/OrderForm';
import OrderTable from '../components/orders/OrderTable';
import {openOrderModal, closeOrderModal} from '../redux/actions/orderActions';
function OrdersView() {
  return (
    <div><AddItem buttonText="Make an order" form={<OrderForm/>}/>
        <OrderTable/>
    </div>
  );
}

export default OrdersView;