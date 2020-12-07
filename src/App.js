import MainView from './views/MainView'
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}><MainView/></Provider>
  );
}

export default App;
