import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MenuHeader from './components/MenuHeader';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Router>
      <MenuHeader />
      <Container>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
      </Container>
    </Router>
  );
}

export default App;
