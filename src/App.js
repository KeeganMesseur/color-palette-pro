import './App.css';
import ContentSection from './ContentSection'
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <ContentSection />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
