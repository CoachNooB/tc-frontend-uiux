import React from 'react';
import { Link } from 'react-router-dom';
import {
    Tab,
    Tabs,
    TabList,
    TabPanel,
} from 'react-tabs';
import {
    MDBCol,
    MDBContainer,
    MDBRow
} from 'mdbreact';
import 'react-tabs/style/react-tabs.css';

const BookingTabs = () => {
    return (
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol>
                    <h2 className='h2 my-4'>Booking Status</h2>
                </MDBCol>
                {window.location.pathname !== '/dashboard/stays' ?
                    <MDBCol className='text-right mt-4 pt-2'>
                        <Link to='/dashboard/stays'>My Stays</Link>
                    </MDBCol>
                    :
                    <MDBCol className='text-right mt-4 pt-2'>
                    </MDBCol>
                }
            </MDBRow>
            <Tabs>
                <TabList>
                    <Tab>Waiting for Payment</Tab>
                    <Tab>Payment Confirmed</Tab>
                    <Tab>Check-in</Tab>
                </TabList>
                <TabPanel className='text-center'>
                    <h3 className='h3-responsive my-4'>Waiting for Payment Data</h3>
                    <p className='lead'><em>No Data Available</em></p>
                </TabPanel>
                <TabPanel className='text-center'>
                    <h3 className='h3-responsive my-4'>Payment Confirmed Data</h3>
                    <p className='lead'><em>No Data Available</em></p>
                </TabPanel>
                <TabPanel className='text-center'>
                    <h3 className='h3-responsive my-4'>Check-in Data</h3>
                    <p className='lead'><em>No Data Available</em></p>
                </TabPanel>
            </Tabs>
        </MDBContainer>
    )
}

export default BookingTabs
