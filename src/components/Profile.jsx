import { UserAuth } from "../context/AuthContext";

const Profile = () => {
  const {googleSignIn, user, logOut} = UserAuth();

  const handleGoogleSignIn = async () => {
    try{
      await googleSignIn();
    }catch(error){
      console.error("Failed to log in: ", error)
    }
  }

  const userInfo = user ? user.reloadUserInfo : '';
  const userPfp = userInfo ? userInfo?.photoUrl : '';
  const displayName = userInfo ? userInfo.displayName : '';

  return (
    <>
      {!user ? 
        <button onClick={handleGoogleSignIn} aria-label="login">
          <img src="/user.png" alt="icon of a user" style={{filter: 'contrast(0) brightness(2)'}} className="max-w-6 cursor-pointer" />
        </button> : 
        <button onClick={logOut} aria-label="logout">
          <img src={userPfp} alt={`${displayName}'s profile picture`} className="max-w-7 rounded-full"/>
        </button>
        }
    </>
  )
}

export default Profile