// @flow weak

import React      from 'react';
import PropTypes  from 'prop-types';

const UserPanel = (
  props
) => (
  <div className="user-panel">
    {
      props.showUserPicture &&
      <div className="image">
        <img
          src={props.userPicture}
          className="img-circle"
          alt="User Image"
        />
      </div>
    }
    <div className="info">
      <p>
        { `${props.hello} ${props.username}` }
      </p>
    </div>
  </div>
);

UserPanel.propTypes = {
  hello:            PropTypes.string,
  username:         PropTypes.string,
  showUserPicture:  PropTypes.bool,
  userPicture:      PropTypes.any,
  online:           PropTypes.bool
};

UserPanel.defaultProps = {
  hello:    'Welcome,',
  username: 'Jane',
  online:          false,
  showUserPicture: true
};

export default UserPanel;
