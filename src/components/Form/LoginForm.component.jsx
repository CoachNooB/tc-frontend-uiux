import React from 'react';
import { Link } from 'react-router-dom';
import {
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
} from 'mdbreact';

const LoginForm = () => {

    const doLogin = () => {
        window.alert('Backend Check User and Password');
    }

    return (
        <MDBContainer className='w-25 rounded border border-light my-4 py-4'>
            <form className='needs-validation mb-3' noValidate>
                <MDBCol className='text-center'>
                    <h2>Sign In</h2>
                </MDBCol>
                <MDBRow>
                    <MDBCol className='mx-4'>
                        <MDBInput
                            icon='user'
                            name='uname'
                            type='text'
                            label='Username or Email'
                            outline
                            required
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol className='mx-4'>
                        <MDBInput
                            icon='lock'
                            name='pass'
                            type='password'
                            label='Password'
                            outline
                            required
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className='justify-content-around'>
                    <MDBCol className='ml-2 pl-5 mb-3'>
                        <div className='custom-control custom-checkbox pl-3'>
                            <input 
                            className='custom-control-input'
                            type='checkbox'
                            value=''
                            id='signInCheck'
                            />
                            <label className='custom-control-label' htmlFor='signInCheck'>
                                Keep me signed in
                            </label>
                        </div>
                    </MDBCol>
                    <MDBCol>
                        <Link to='/forgot-password'>Forgot Password</Link>
                    </MDBCol>
                </MDBRow>
                <Link to='/dashboard' onClick={doLogin} className='ml-4 rounded btn btn-primary'>Sign In</Link>
            </form>
            <Link className='ml-4 mb-3' to='/register'>Sign up</Link>
        </MDBContainer>
    )
}

export default LoginForm
