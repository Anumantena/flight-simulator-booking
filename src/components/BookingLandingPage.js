import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import BgImage from './layout/BgImage'
import BookingAppointment from './BookAppointment'
import Appointments from './Appointments'

const bgProps = {
  title: 'Flight Simulator App',
  description:
        'Sky Diving is fun !! See the beauty of Norfolk from a bird’s eye view as you peacefully fly back to earth with your parachute. If you’ve never jumped before, you’ll be amazed at how easy the training is and how fun our tandem jumps.',
  image:
        'https://img-vimbly-com-images.imgix.net/full_photos/0_new-tandem-skydiving-2.jpg?auto=compress&fit=crop&h=490&ixlib=php-1.2.1&w=730',
  imageText: 'main image description',
  linkText: 'Continue reading…'
}

const BookingLandingPage = (props) => {
  const { whoLoggedIn, items, handleRemove, date, handleEdit } = props
  return (
        <>
            <BgImage bgProps={bgProps} whoLoggedIn={whoLoggedIn} />
            <Grid container>
                <Grid item md={12} sx={{ mb: 2 }}>
                    <BookingAppointment
                        {...props}
                    />
                </Grid>
                <Appointments items={items} handleRemove={handleRemove} date={date} handleEdit={handleEdit}/>
            </Grid>
        </>
  )
}

export default BookingLandingPage
