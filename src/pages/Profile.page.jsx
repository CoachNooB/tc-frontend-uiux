import React from 'react';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
} from 'mdbreact'

import Profile from '../components/Main/Profile.component';


const ProfilePage = () => {
    return (
        <MDBContainer fluid>
            <MDBRow className='mb-3'>
                <MDBCol>
                    <h2 className='h2-responsive mb-5'>My Profile</h2>
                </MDBCol>
            </MDBRow>
            <MDBRow className='mb-3'>
                <MDBCol md='3'>
                    <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                        alt=""
                        className="rounded-circle img-fluid mb-4"
                    />
                </MDBCol>
                <MDBCol md='9'>
                    <Profile />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default ProfilePage
