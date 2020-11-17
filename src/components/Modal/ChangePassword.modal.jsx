import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBContainer,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter,
    MDBIcon,
    MDBRow,
    MDBInput,
} from 'mdbreact';

const ChangePassword = () => {

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const changePassword = () => {
        window.alert('Do Backend Change Password')
    }

    return (
        <MDBContainer>
            <Link className='rounded btn btn-deep-orange' onClick={toggle}><MDBIcon className='pr-2' icon='unlock-alt' />Change Password</Link>
            <MDBModal isOpen={modal} toggle={toggle}>
                <MDBModalHeader toggle={toggle}>Update Password</MDBModalHeader>
                <MDBModalBody>
                    <MDBRow className='mx-4' style={{borderBottom: '2px solid lightblue'}}>
                        <MDBInput
                            icon='lock'
                            name='current-pass'
                            type='password'
                            label='Current Password'
                            outline
                            required
                        />
                    </MDBRow>
                    <MDBRow className='mx-4'>
                        <MDBInput
                            icon='lock'
                            name='new-pass'
                            type='password'
                            label='New Password'
                            outline
                            required
                        />
                    </MDBRow>
                    <MDBRow className='mx-4'>
                        <MDBInput
                            icon='lock'
                            name='confirm-pass'
                            type='password'
                            label='Confirm Password'
                            outline
                            required
                        />
                    </MDBRow>
                </MDBModalBody>
                <MDBModalFooter>
                    <button className='btn btn-primary' onClick={toggle}>Cancel</button>
                    <Link className='btn btn-deep-orange' onClick={changePassword} to='/login'>Change Password</Link>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    )
}

export default ChangePassword
