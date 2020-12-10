import React from 'react';
import Faq from './Components/Pages/Faq/Faq';
import Home from './Components/Pages/Home/Home';
import Quiz from './Components/Pages/Quiz/Quiz';
import Account from './Components/Pages/Account/Account';
import Dashboard from './Components/Pages/Dashboard/Dashboard';

export default class app extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "Home"
    }
  }

  setActive = (page) => {
    this.setState({ active: page });
  }

  render() {
    return (
      <div className="main">
        {this.state.active === "Home" ? <Home setActive={this.setActive} /> : null}
        {this.state.active === "Quiz" ? <Quiz setActive={this.setActive} /> : null}
        {this.state.active === "Dashboard" ? <Dashboard setActive={this.setActive} /> : null}
        {this.state.active === "Account" ? <Account setActive={this.setActive} /> : null}
        {this.state.active === "Faq" ? <Faq setActive={this.setActive} /> : null}
      </div>
    )
  }
}


