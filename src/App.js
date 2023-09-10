import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
// import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <div className="Content">
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/qurantracker">
                <Container className = "d-flex align-items-center justify-content-center"
                  style = {{ minHeight: "100vh" }}>
                  <SignUp />
                </Container>
              </Route>
            </Switch>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
