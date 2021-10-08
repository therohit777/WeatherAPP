import './App.css';
import { Weather } from './components/Weather';
import { BrowserRouter as Router ,Route, Switch,Link} from 'react-router-dom';
import { Logo } from './components/Logo';


function App() {
  

  return (
    <>
      <Router>
       <Switch>
       <Route path="/weather" component={Weather} />
       <Route path="" exact component={Logo} />
       </Switch>
     </Router>
    </>
  );
}

export default App;
