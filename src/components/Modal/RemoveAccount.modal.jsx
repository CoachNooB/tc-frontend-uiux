import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBContainer,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter,
    MDBIcon,
} from 'mdbreact';

const RemoveAccount = () => {

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const deleteAccount = () => {
        window.alert('Do Backend Delete Account')
    }

    return (
        <MDBContainer>
            <Link className='rounded btn btn-danger' onClick={toggle}><MDBIcon className='pr-2' icon='user-times' />Remove Account</Link>
            <MDBModal isOpen={modal} toggle={toggle}>
                <MDBModalHeader toggle={toggle}>Are you sure want to Remove this Account?</MDBModalHeader>
                <MDBModalBody>
                    This action <strong>cannot</strong> be undone. This will permanently remove your account from our services. 
                </MDBModalBody>
                <MDBModalFooter>
                    <button className='btn btn-primary' onClick={toggle}>Cancel</button>
                    <Link className='btn btn-danger' onClick={deleteAccount} to='/login'>Remove Account</Link>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    )
}

export default RemoveAccount
