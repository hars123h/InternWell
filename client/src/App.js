import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Team from './pages/Team'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Internship from './pages/Internship';
import StudentInit from './pages/StudentInit';
import SocietyInit from './pages/SocietyInit';

import Signup from './auth/Signup';
import Signin from './auth/Signin';
import Activate from './auth/Activate';
import Private from './core/Private';
import Admin from './core/Admin';
import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';
import Forgot from './auth/Forgot';
import Reset from './auth/Reset';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/services" component={Service}></Route>
          <Route path="/team" component={Team}></Route>
          <Route path="/internshp" component={Internship}></Route>
          <Route path="/student-init" component={StudentInit}></Route>
          <Route path="/society-init" component={SocietyInit}></Route>
          <Route path="/contact" component={Contact}></Route>

          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/auth/activate/:token" exact component={Activate} />
          <PrivateRoute path="/private" exact component={Private} />
          <AdminRoute path="/admin" exact component={Admin} />
          <Route path="/auth/password/forgot" exact component={Forgot} />
          <Route path="/auth/password/reset/:token" exact component={Reset} />


        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
