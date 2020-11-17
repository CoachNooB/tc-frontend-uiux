import React from 'react';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
} from 'mdbreact'

import PointTabs from '../components/Main/Points.component';


const PointPage = () => {
    return (
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol>
                    <h2 className='h2-responsive mb-5'>My Points Activity</h2>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol md='11'>
                    <PointTabs />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default PointPage
