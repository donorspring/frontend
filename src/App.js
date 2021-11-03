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
import EmailEdits2 from './components/email-edits-2';
import EmailEdits3 from './components/email-edits3';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import { Email } from '@material-ui/icons';

function App() {

  return (
    <Router>
      <div>
        <Navbar/>
      </div>
      <div className="body">
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
          <Route path="/email/template3" component={EmailEdits3}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
