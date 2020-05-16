import React from 'react';
import PropTypes from 'prop-types';
import StarBirth from './StarBirth';
import LowMassControl from './LowMassControl';
import HighMassControl from './HighMassControl';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class StarControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starBirthHomePage: true,
      highMassControl:false,
      lowMassControl:false
    };
  }

  handleClick = () => {
  }

  render() {
    return(
         <Router>
         <Header />
         <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/memorycontrol" component={MemoryControl} />
           <Route path="/signin" component={Signin} />
           <Route path="/contact" component={Contact} />
         </Switch>
         <Footer />
       </Router>
    )
  }
}
export default StarControl;