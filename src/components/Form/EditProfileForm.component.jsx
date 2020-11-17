import React from 'react';
import { Link } from 'react-router-dom';
import {
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
} from 'mdbreact';
import { ProfileData } from '../Main/ProfileData'

const EditProfileForm = () => {

    const doEditProfile= () => {
        window.alert('Do Backend Edit Profile');
    }

    return (
        <MDBContainer className='w-50 rounded border border-light my-4 py-4'>
            <form className='needs-validation mb-3' noValidate>
                <MDBCol className='text-center mb-3'>
                    <h2>Edit Profile</h2>
                </MDBCol>
                <MDBRow>
                    <MDBCol md='3' className='mx-4'>
                        <MDBIcon className='mr-3' icon='signature'/>
                        <select className='rounded p-1'>
                            <option>Choose title</option>
                            <option value='Mr.'>Mr.</option>
                            <option value='Mrs.'>Mrs.</option>
                            <option value='Ms.'>Ms.</option>
                        </select>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol className='mx-4'>
                        <MDBInput
                            icon='user'
                            name='fname'
                            type='text'
                            label='First name'
                            value={ProfileData.firstName}
                            outline
                            required
                        />
                    </MDBCol>
                    <MDBCol className='mx-4'>
                        <MDBInput
                            icon='address-card'
                            name='lname'
                            type='text'
                            label='Last name'
                            value={ProfileData.lastName}
                            outline
                            required
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol className='mx-4'>
                        <MDBInput
                            icon='user-secret'
                            name='uname'
                            type='text'
                            label='Username'
                            value={ProfileData.userName}
                            outline
                            required
                            />
                    </MDBCol>
                    <MDBCol className='mx-4'>
                        <MDBInput
                            icon='envelope'
                            name='email'
                            type='email'
                            label='Email'
                            value={ProfileData.email}
                            outline
                            required
                            />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol className='mx-4'>
                        <MDBInput
                            icon='mobile-alt'
                            name='uname'
                            type='number'
                            label='Phone'
                            value={ProfileData.phoneNumber}
                            outline
                            required
                            />
                    </MDBCol>
                    <MDBCol className='mx-4'>
                        <MDBInput
                            icon='calendar-alt'
                            name='uname'
                            type='date'
                            label='Birthday'
                            value={ProfileData.birthday}
                            outline
                            required
                            />
                    </MDBCol>
                </MDBRow>
                <Link to='/dashboard' onClick={doEditProfile} className='ml-4 rounded btn btn-primary'>Edit Profile</Link>
            </form>
            <Link className='rounded btn btn-danger ml-4 mb-3' to='/dashboard/profile'>Cancel</Link>
        </MDBContainer>
    )
}

export default EditProfileForm
