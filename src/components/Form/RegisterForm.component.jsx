import React from 'react';
import { Link } from 'react-router-dom';
import {
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
} from 'mdbreact';

//Modals
import TermsAndConditions from '../Modal/TermsAndCondition.modal';
import PrivacyPolicy from '../Modal/PrivacyPolicy.modal';

const RegisterForm = () => {

    const doRegister= () => {
        window.alert('Do Backend Register');
    }

    return (
        <MDBContainer className='w-50 rounded border border-light my-4 py-4'>
            <form className='needs-validation mb-3' noValidate>
                <MDBCol className='text-center mb-3'>
                    <h2>Register</h2>
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
                    <MDBCol className='mx-4'>
                        <MDBInput
                            icon='lock'
                            name='confirm-pass'
                            type='password'
                            label='Confirm Password'
                            outline
                            required
                            />
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol className='mx-4'>
                        <MDBInput
                            icon='qrcode'
                            name='ref-code'
                            type='text'
                            label='Refferal Code'
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
                            id='termsAndConditionCheck'
                            />
                            <label className='custom-control-label' htmlFor='termsAndConditionCheck'>
                                I agree with <TermsAndConditions /> and <PrivacyPolicy /> of Picasso Hotel
                            </label>
                        </div>
                    </MDBCol>
                </MDBRow>
                <Link to='/dashboard' onClick={doRegister} className='ml-4 rounded btn btn-primary'>Sign Up</Link>
            </form>
            <Link className='ml-4 mb-3' to='/login'>Sign in</Link>
        </MDBContainer>
    )
}

export default RegisterForm
