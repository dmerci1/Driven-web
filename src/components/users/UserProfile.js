import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import ProfileHeader from './ProfileHeader';
import ProfileDescription from './ProfileDescription';
import ProfileSideBar from './ProfileSideBar';
import ProfilePhotos from './ProfilePhotos';
import UserEvents from './UserEvents'

const query = ({auth}) => {
  return [
    {
      collection: 'users',
      doc: auth.uid,
      subcollections: [{collection: 'photos'}],
      storeAs: 'photos'
    }
  ];
};

const mapState = (state) => ({
  profile: state.firebase.profile,
  auth: state.firebase.auth,
  photos: state.firestore.ordered.photos
});

class UserProfile extends Component {
  render() {
    const { profile, photos } = this.props;
    return (
      <Grid>
        <ProfileHeader profile={profile}/>
        <ProfileDescription profile={profile}/>
        <ProfileSideBar/>
        {photos && photos.length > 0 &&
        <ProfilePhotos photos={photos}/>}
        <UserEvents/>
      </Grid>
    );
  }
}
export default compose(connect(mapState),
firestoreConnect(auth => query(auth)),
)(UserProfile);
