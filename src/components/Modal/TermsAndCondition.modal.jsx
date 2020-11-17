import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter,
} from 'mdbreact';

const TermsAndConditions = () => {

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    return (
        <>
            <Link onClick={toggle}>Terms & Conditions</Link>
            <MDBModal isOpen={modal} toggle={toggle}>
                <MDBModalHeader toggle={toggle}>Our Terms & Conditions</MDBModalHeader>
                <MDBModalBody>
                    Write Terms & Conditions Here
                </MDBModalBody>
                <MDBModalFooter>
                    <Link className='btn btn-primary' onClick={toggle}>Close</Link>
                </MDBModalFooter>
            </MDBModal>
        </>
    )
}

export default TermsAndConditions
