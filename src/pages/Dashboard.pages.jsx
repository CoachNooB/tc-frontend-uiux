import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
} from 'mdbreact';


//Components
import SideMenu from '../components/Navigation/SideMenu.component';
import EditProfileForm from '../components/Form/EditProfileForm.component';
import Logo from './picasso-large-logo.svg';

//Pages
import Home from './Home.page';
import ProfilePage from './Profile.page';
import PointPage from './Points.page';
import StayPage from './Stay.page';


const Dashboard = () => {
    return (
        <MDBContainer fluid className='mb-4 pb-4'>
            <MDBRow>
                <MDBCol>
                    <img src={Logo} height='200' width='250' alt='logo' />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol className='mb-4' md='2'>
                    <SideMenu />
                </MDBCol>
                <MDBCol md='10'>
                    <Switch>
                        <Route exact path='/dashboard' component={Home} />
                        <Route path='/dashboard/profile' component={ProfilePage} />
                        <Route path='/dashboard/edit-profile' component={EditProfileForm} />
                        <Route path='/dashboard/points' component={PointPage} />
                        <Route path='/dashboard/stays' component={StayPage} />
                    </Switch>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Dashboard
