import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Button from '/imports/ui/components/button/component';
import Users from '/imports/api/users/index';
import Auth from '/imports/ui/services/auth/index';
import JoinAudio from './component';

class JoinAudioContainer extends React.Component {

  render() {
    return (
      <JoinAudio {...this.props} />
    );
  }
}

export default createContainer((params) => {
  const user = Users.findOne({ userId: Auth.userID }).user;

  return {
    isInAudio: user.voiceUser.joined,
    isInListenOnly: user.listenOnly,
    open: params.open,
    close: params.close,
  };
}, JoinAudioContainer);
