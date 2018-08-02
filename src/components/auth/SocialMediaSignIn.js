import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const SocialMediaSignIn = (socialLogin) => {
  return (
    <div>
      <Button type="button" style={{ marginBottom: '10px'}} fluid color="facebook">
        <Icon name="facebook" />
        Login with facebook Account
      </Button>

      <Button type="button" fluid color="Google plus">
        <Icon name="Google plus" />
        Login with Google Account
      </Button>
    </div>
  );
};

export default SocialMediaSignIn;
