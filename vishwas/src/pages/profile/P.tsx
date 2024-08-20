import Profile from './ProfilePage';

const profileData = {
  name: 'John Doe',
  location: 'Rural Area',
  landDetails: {
    land1: {
      soilType: 'Clay',
      size: '10 acres',
      location: 'North Field'
    },
    land2: {
      soilType: 'Sandy',
      size: '8 acres',
      location: 'South Field'
    }
  }
};

function P() {
  return <Profile {...profileData} />;
}
export default P;