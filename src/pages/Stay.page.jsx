import React from 'react';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
} from 'mdbreact'

import Stay from '../components/Main/Stay.component';
import BookingTabs from '../components/Main/BookingTabs.component';


const StayPage = () => {
    return (
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol>
                    <h2 className='h2-responsive'>My Stays</h2>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md='11'>
                    <Stay />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md='11'>
                    <hr />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md='11'>
                    <BookingTabs />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default StayPage
