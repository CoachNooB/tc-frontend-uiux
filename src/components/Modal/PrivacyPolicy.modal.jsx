import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter,
} from 'mdbreact';

const PrivacyPolicy = () => {

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    return (
        <>
            <Link onClick={toggle}>Privacy Policy</Link>
            <MDBModal isOpen={modal} toggle={toggle}>
                <MDBModalHeader toggle={toggle}>Our Privacy Policy</MDBModalHeader>
                <MDBModalBody>
                    Write Privacy Policy Here
                </MDBModalBody>
                <MDBModalFooter>
                    <Link className='btn btn-primary' onClick={toggle}>Close</Link>
                </MDBModalFooter>
            </MDBModal>
        </>
    )
}

export default PrivacyPolicy
