import './App.css';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react'


function App() {
  const { store, persistor } = configureStore()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/*You can also place a Loading component in loading  */}
        <div className="Main">
          <Main />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
