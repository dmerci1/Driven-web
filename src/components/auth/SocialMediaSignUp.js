import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const SocialMediaSignUp = ({ socialLogin }) => {
  return (
    <div>
      <Button onClick={() => socialLogin('facebook')} type="button" style={{ marginBottom: '10px'}} fluid color="facebook">
        <Icon name="facebook" />
        Sign up with facebook Account
      </Button>

      <Button onClick={() => socialLogin('google')} type="button" fluid color="Google plus">
        <Icon name="Google plus" />
        Sign up with Google Account
      </Button>
    </div>
  );
};

export default SocialMediaSignUp;
