import React from 'react'
import './Profile.css'
import { useAuth0 } from "@auth0/auth0-react"

const Profile = () => {
    const { user, isLoading } = useAuth0()

    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="card2">
                    <div className="upper">
                        <img src="https://i.imgur.com/Qtrsrk5.jpg" className="img-fluid" alt="bgImage" />
                    </div>
                    {isLoading
                        ? <div style={{ display: "flex", justifyContent: "center" }}>
                            <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}>
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        : <>
                            <div className="user text-center">
                                <div className="profile2">
                                    <img src={user?.picture} className="rounded-circle" width="80" alt="profile" />
                                </div>
                            </div>
                            <div className="mt-5 text-center">
                                <h4 className="mb-0"> @{user?.nickname}</h4> <span className="text-muted d-block mb-2">{user?.email}</span>
                                {/* <button class="btn btn-primary btn-sm follow">Follow</button> */}
                                {/* <div class="d-flex justify-content-between align-items-center mt-4 px-4">
                            <div class="stats">
                                <h6 class="mb-0">Followers</h6> <span>8,797</span>
                            </div>
                            <div class="stats">
                                <h6 class="mb-0">Projects</h6> <span>142</span>
                            </div>
                            <div class="stats">
                                <h6 class="mb-0">Ranks</h6> <span>129</span>
                            </div>
                        </div> */}
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile
