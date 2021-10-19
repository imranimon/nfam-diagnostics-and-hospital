import './App.css';
import Home from './components/Home/Home';
import Header from './components/Shared/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Shared/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import SignIn from './components/SignIn/SignIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SingleService from './components/SingleService/SingleService';
import About from './components/About/About';
import Appointment from './components/Appointment/Appointment';
import SignUp from './components/SignUp/SignUp';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/signin'>
              <SignIn></SignIn>
            </Route>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <PrivateRoute path='/service/:sID'>
              <SingleService></SingleService>
            </PrivateRoute>
            <PrivateRoute path='/appointment'>
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
