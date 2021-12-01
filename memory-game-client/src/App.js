import { Provider } from 'react-redux';
import './App.css';
import GameContainer from './components/GameContainer';
import store from './store';

function App() {
    return (
        <Provider store={store}>
          <div className="App">
              <GameContainer > </GameContainer>
          </div>
        </Provider>
    );
}

export default App;
