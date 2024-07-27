import './App.css';
import AddTodo from './components/AddTodo'
import Todos from './components/Todos';
import { Provider } from 'react-redux'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className='container'>
          <AddTodo />
          <Todos />
        </div>
      </div>
    </Provider>
  );
}

export default App;
