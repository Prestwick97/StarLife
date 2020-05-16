import React from 'react';
// import PropTypes from 'prop-types';
// import Star from './Star';

function StarBirth(props) {
  return(
    <React.Fragment>
            <div class='createStar'>
              <form>
                  <input type='number' name='mass' placeholder='solar mass (kg)'/>
                <button>{"Create your star"}</button>
              </form>
            </div>
    </React.Fragment>
  );
}

export default StarBirth;