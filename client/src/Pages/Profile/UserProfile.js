import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { DeleteUserFunc, GetUserFunc } from '../../store/actions/authAction'; 

const UserProfile = ({GetUserFunc, user, DeleteUserFunc}) => {
  
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    GetUserFunc();
  },[])

  useEffect(() => {
    setProfile(user)
  },[user])

  const userDelete = (id) => { 
    DeleteUserFunc(id)
  }

  const UserDetails = () => {
    if(profile){
        return(
          <div className="card" >
              <img src={profile.avatar} style={{width:"100%", display:"block", margin:"auto"}} />
            <div className="card-body">
              <h4 className="card-title">Name:- {profile.name}</h4>
              <p className="card-text">Email Id.:- {profile.email}</p>
               <button className="btn btn-secondary" onClick={(e) =>userDelete(profile._id) }>
                Delete Profile
               </button>
            </div>
          </div>
        )
    }
  }

  console.log(user)
  return (
    <div className="userProfile CommanBlock">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 m-auto">
            {UserDetails()}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user:state.userAuth.getUser.user
})

const mapDispatchToProps = {
  GetUserFunc,
  DeleteUserFunc
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
