import './App.css';
import Account from './pages/account';
import ButtonTest from './components/button';
import Contacts from './pages/contacts';
import Dashboard from './pages/dashboard';
import Emails from './pages/emails';
import Navbar from './components/navbar';
import Payment from './pages/payment';
import SignIn from './pages/sign-in';
import Uploads from './pages/upload';
import EmailEdits from './components/email-edits';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import { Email } from '@material-ui/icons';

function App() {

  return (
    <Router>
      <div>
        <Navbar/>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/account" component={Account}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/emails" component={Emails}/>
          <Route path="/payment" component={Payment}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/upload" component={Uploads}/>
          <Route path="/email/template1" component={EmailEdits}/>
          <Route path="/email/template2" component={EmailEdits}/>
          <Route path="/email/template3" component={EmailEdits}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
