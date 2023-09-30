import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';

function App() {
  return (
    <div className="App">
        <Navbar/>
          <div className="Content">
          <BrowserRouter>
            <AuthProvider>
            <Switch>
              <Route exact path="/"><Home /></Route>
              <PrivateRoute exact path="/main" component={Dashboard} />
                <Container className = "d-flex align-items-center justify-content-center"
                  style = {{ minHeight: "100vh" }}>
                  <div className='w-100' style={{maxWidth: "400px"}}>
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/forgot-password" component={ForgotPassword} />
                    <PrivateRoute exact path="/update-profile" component={UpdateProfile} />

                  </div>
                </Container>
            </Switch>
            </AuthProvider>
          </BrowserRouter>
          </div>
      </div>
  );
}

export default App;
