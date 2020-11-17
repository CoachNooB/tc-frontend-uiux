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
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from 'mdbreact';
import 'react-tabs/style/react-tabs.css';

const PointTabs = () => {

    const redeemPoints = () => {
        window.alert('Do Backend Redeem Point')
    }

    return (
        <MDBContainer fluid>
            {window.location.pathname !== '/dashboard/points' ? 
                <MDBRow>
                    <MDBCol>
                        <h2 className='h2 my-4'>My Points</h2>
                    </MDBCol>
                </MDBRow>
                :
                <MDBRow>
                    <MDBCol>
                        <h3 className='h3-responsive mb-5'>Enjoy your stay with us, and get hundreds of Benefits.</h3>
                    </MDBCol>
                </MDBRow>
            }
            <Tabs>
                <TabList>
                    <Tab>Rewards List</Tab>
                    <Tab>Points History</Tab>
                </TabList>
                <TabPanel className='text-center'>
                    <MDBCol>
                        <h2 className='text-left mt-4'>You have 0 Points</h2>
                    </MDBCol>
                    <MDBRow className='pl-5'>
                        <MDBCol className='my-4'>
                            <MDBCard className='h-100' style={{ width: "22rem" }}>
                                <img src='https://mdbootstrap.com/img/Others/documentation/1.jpg' className='img-fluid' alt='' />
                                <MDBCardBody>
                                    <MDBCardTitle>Free Stay</MDBCardTitle>
                                    <MDBCardText>
                                        Free 1 Night Stay at our Premium Suites
                                    </MDBCardText>
                                    <MDBCardText>
                                        1000 points
                                    </MDBCardText>
                                </MDBCardBody>
                                <Link onClick={redeemPoints} className='mb-3'>Redeem Points</Link>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='my-4'>
                            <MDBCard className='h-100' style={{ width: "22rem" }}>
                                <img src='https://inhabitat.com/wp-content/blogs.dir/1/files/2019/04/Tilburg-bus-station-by-cepezed-3-889x582.jpg' className='img-fluid' alt='' />
                                <MDBCardBody>
                                    <MDBCardTitle>Free Transportation</MDBCardTitle>
                                    <MDBCardText>
                                        Free Transportation to Nearby Station
                                    </MDBCardText>
                                    <MDBCardText>
                                        5000 points
                                    </MDBCardText>
                                </MDBCardBody>
                                <Link onClick={redeemPoints} className='mb-3'>Redeem Points</Link>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='my-4'>
                            <MDBCard className='h-100' style={{ width: "22rem" }}>
                                <img src='https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg' className='img-fluid' alt='' />
                                <MDBCardBody>
                                    <MDBCardTitle>Free Stay</MDBCardTitle>
                                    <MDBCardText>
                                        Free 1 Night Stay at our Presidential Suites
                                    </MDBCardText>
                                    <MDBCardText>
                                        100000 points
                                    </MDBCardText>
                                </MDBCardBody>
                                <Link onClick={redeemPoints} className='mb-3'>Redeem Points</Link>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol className='my-4'>
                            <MDBCard className='h-100' style={{ width: "22rem" }}>
                                <img src='https://i.pinimg.com/originals/13/44/7a/13447a83190b19a77cea12ea36279c51.jpg' className='img-fluid' alt='' />
                                <MDBCardBody>
                                    <MDBCardTitle>VIP Lounge</MDBCardTitle>
                                    <MDBCardText>
                                        Free Pass to our Art Gallery and VIP Longue
                                    </MDBCardText>
                                    <MDBCardText>
                                        10000 points
                                    </MDBCardText>
                                </MDBCardBody>
                                <Link onClick={redeemPoints} className='mb-3'>Redeem Points</Link>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </TabPanel>
                <TabPanel className='text-center'>
                    <h3 className='h3-responsive my-4'>Reward History Data</h3>
                    <p className='lead'><em>No Data Available</em></p>
                </TabPanel>
            </Tabs>
        </MDBContainer>
    )
}

export default PointTabs
