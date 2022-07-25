import './App.css';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/user/signup' component={CreateUser} />
      </Switch>
    </div>
  );
}


export default App;
