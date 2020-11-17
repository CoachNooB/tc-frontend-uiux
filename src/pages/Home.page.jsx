import React from 'react';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
} from 'mdbreact'

//Components
import BookingTabs from '../components/Main/BookingTabs.component';
import PointTabs from '../components/Main/Points.component';
import { ProfileData } from '../components/Main/ProfileData';

const Home = () => {
    return (
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol>
                    <h2 className='h2-responsive'>Home</h2>
                    <p className='lead'>Welcome back, {ProfileData.title} {ProfileData.firstName} </p>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md='11'>
                    <BookingTabs />
                </MDBCol>
            </MDBRow>
            <MDBCol md='11'>
                <hr className='my-5' />
            </MDBCol>
            <MDBRow>
                <MDBCol md='11'>
                    <PointTabs />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Home
