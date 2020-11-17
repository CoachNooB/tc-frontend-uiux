import { MDBIcon } from 'mdbreact';

export const SideMenuData = [
    {
        title: 'Home',
        path: '/dashboard',
        icon: <MDBIcon icon='home' />,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/dashboard/profile',
        icon: <MDBIcon icon='user-friends' />,
        cName: 'nav-text'
    },
    {
        title: 'Points',
        path: '/dashboard/points',
        icon: <MDBIcon icon='trophy' />,
        cName: 'nav-text'
    },
    {
        title: 'Stays',
        path: '/dashboard/stays',
        icon: <MDBIcon icon='hotel' />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/login',
        icon: <MDBIcon icon='power-off' />,
        cName: 'nav-text logout'
    },
]