import React from 'react';
import { Link } from 'react-router-dom';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBTable,
    MDBTableBody,
    MDBIcon,
} from 'mdbreact';

import { ProfileData } from './ProfileData';
import RemoveAccount from '../Modal/RemoveAccount.modal';
import ChangePassword from '../Modal/ChangePassword.modal';

const Profile = () => {
    return (
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol md='6'>
                    <h1>{ProfileData.title} {ProfileData.firstName} {ProfileData.lastName}</h1>
                </MDBCol>
                <MDBCol md='4' className='text-right pt-4 pr-5'>
                    <Link to='/dashboard/edit-profile'>Edit Profile</Link>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md='10'>
                    <hr />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md='10'>
                    <h3 className='h3-responsive'>Detail Information</h3>
                    <MDBRow className='my-4'>
                        <MDBCol md='4'>
                            <MDBTable striped>
                                <MDBTableBody>
                                    <tr><td className='lead'><MDBIcon className='pr-3' icon='id-card' />Member ID:</td></tr>
                                    <tr><td className='lead'><MDBIcon className='pr-3' far icon='id-card' />Identity Number:</td></tr>
                                    <tr><td className='lead'><MDBIcon className='pr-3' icon='user-alt' />Username:</td></tr>
                                    <tr><td className='lead'><MDBIcon className='pr-3' icon='calendar-alt' />Birthday:</td></tr>
                                    <tr><td className='lead'><MDBIcon className='pr-3' icon='envelope' />Email:</td></tr>
                                    <tr><td className='lead'><MDBIcon className='pr-3' icon='phone-alt' />Phone:</td></tr>
                                    <tr><td className='lead'><MDBIcon className='pr-3' icon='qrcode' />Refferal Code:</td></tr>
                                </MDBTableBody>
                            </MDBTable>
                        </MDBCol>
                        <MDBCol md='4'>
                            <MDBTable striped>
                                <MDBTableBody>
                                    <tr><td className='lead'>{ProfileData.memberID}</td></tr>
                                    <tr><td className='lead'>{ProfileData.identityNumber}</td></tr>
                                    <tr><td className='lead'v>{ProfileData.userName}</td></tr>
                                    <tr><td className='lead'>{ProfileData.birthday}</td></tr>
                                    <tr><td className='lead'>{ProfileData.email}</td></tr>
                                    <tr><td className='lead'>{ProfileData.phoneNumber}</td></tr>
                                    <tr><td className='lead'>{ProfileData.refferalCode}</td></tr>
                                </MDBTableBody>
                            </MDBTable>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md='10'>
                    <hr />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md='10'>
                    <h3>Account Settings</h3>
                    <MDBRow className='my-4'>
                        <MDBCol md='3'>
                            <ChangePassword />
                        </MDBCol>
                        <MDBCol md='3'>
                            <RemoveAccount />
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Profile
