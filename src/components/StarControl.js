import React from 'react';
import PropTypes from 'prop-types';
import StarBirth from './StarBirth';
import LowMassControl from './LowMassControl';
import HighMassControl from './HighMassControl';

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
      <React.Fragment>
        <div class='createStar'>
          <form>
              <input type='number' name='mass' placeholder='solar mass (kg)'/>
            <button onClick={this.handleClick}>{"Create your star"}</button>
          </form>
        </div>
      </React.Fragment>
    )
  }
}
export default StarControl;