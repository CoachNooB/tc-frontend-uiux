import React, { useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
} from 'mdbreact'
import { StayData } from './StayData';

const Stay = () => {

    const [search, setSearch] = useState('')

    const searchChange = (e) => {
        setSearch(e.target.value)
    }

    const filteredData = StayData.filter(data => {
        return data.bookingID.toLowerCase().includes(search.toLowerCase());
    })

    return (
        <MDBContainer className='my-4 py-3'>
            <MDBInput
                icon='search'
                name='search'
                type='text'
                label='Search by Booking  ID'
                outline
                onChange={searchChange}
            />
            <MDBTable striped>
                <MDBTableHead color='blue lighten-1'>
                    <tr>
                        <th>#</th>
                        <th>Booking ID</th>
                        <th>Room Type</th>
                        <th>Room Number</th>
                        <th>Name</th>
                        <th>Date In</th>
                        <th>Date Out</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {filteredData.map((data, index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{data.bookingID}</td>
                                <td>{data.roomType}</td>
                                <td>{data.roomNumber}</td>
                                <td>{data.guestName}</td>
                                <td>{data.dateIn}</td>
                                <td>{data.dateOut}</td>
                            </tr>
                        )
                    })}
                </MDBTableBody>
            </MDBTable>
        </MDBContainer>
    )
}

export default Stay
