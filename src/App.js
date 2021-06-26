import './App.css';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';
function App() {
  const store = configureStore()

  return (
    <Provider store={store}>
      <div className="Main">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
