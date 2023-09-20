import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
// import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <div className="Content">
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/qurantracker">
                <AuthProvider>
                  <Container className = "d-flex align-items-center justify-content-center"
                    style = {{ minHeight: "100vh" }}>
                    <div className='w-100' style={{maxWidth: "400px"}}>
                      <SignUp />
                    </div>
                  </Container>
                </AuthProvider>
              </Route>
            </Switch>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
