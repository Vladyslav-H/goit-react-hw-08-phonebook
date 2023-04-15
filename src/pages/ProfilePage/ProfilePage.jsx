import { useSelector } from 'react-redux';
import { ProfileOverlay, ProfileWrapp, InfoStyled } from './ProfilePage.styled';
import { selectUser } from 'redux/auth/authSelectors';

const ProfilePage = () => {
  const user = useSelector(selectUser);
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
