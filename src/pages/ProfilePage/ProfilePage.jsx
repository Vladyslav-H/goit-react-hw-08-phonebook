import { useSelector } from 'react-redux';
import { ProfileOverlay, ProfileWrapp, InfoStyled } from './ProfilePage.styled';

const ProfilePage = () => {
  const user = useSelector(state => state.auth.user);
  return (
    <ProfileOverlay>
      <ProfileWrapp>
        <h2>Information about your profile</h2>
        <InfoStyled>Your name - {user.name}</InfoStyled>
        <InfoStyled>Your email - {user.email}</InfoStyled>
      </ProfileWrapp>
    </ProfileOverlay>
  );
};

export default ProfilePage;
