import React from 'react';
import { Link } from 'react-router-dom';
import {
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow
} from 'mdbreact'

const ResetPassword = () => {

    const sendLink = () => {
        window.alert('Send Reset Link')
    }

    return (
        <MDBContainer className='w-25 rounded border border-light my-4 py-4'>
            <MDBCol className='text-center'>
                <h2 className='h2-responsive'>Reset Password</h2>
                <p className='lead'>Enter the email address associated with your account, and we will send you a link to reset your password</p>
            </MDBCol>
            <MDBRow className='mx-4'>
                <MDBCol>
                    <MDBInput
                        icon='envelope'
                        name='email'
                        type='email'
                        label='Email'
                        outline
                        required
                    />
                </MDBCol>
            </MDBRow>
            <MDBRow className='mx-4 mb-4'>
                <MDBCol>
                    <Link to='/login' onClick={sendLink} className='rounded btn btn-primary'>Send Reset Link</Link>
                </MDBCol>
            </MDBRow>
            <MDBRow className='pl-4 mx-4'>
                <Link to='/login' >Sign in</Link>
            </MDBRow>
        </MDBContainer>
    )
}

export default ResetPassword
