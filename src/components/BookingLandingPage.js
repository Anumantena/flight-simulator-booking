import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import BgImage from './layout/BgImage'
import BookingAppointment from './BookingAppointment'
import Appointments from './Appointments'

const bgProps = {
  title: 'Flight Simulator Application',
  description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image:
        'https://img-vimbly-com-images.imgix.net/full_photos/0_new-tandem-skydiving-2.jpg?auto=compress&fit=crop&h=490&ixlib=php-1.2.1&w=730',
  imageText: 'main image description',
  linkText: 'Continue reading…'
}

const BookingLandingPage = (props) => {
  const { whoLoggedIn, date, slot, disable, setitems, setDisabled, handleClick, handleSlot, handleSubmit, setSlot, setDate, items, handleRemove } = props
  return (
        <>
            <BgImage bgProps={bgProps} whoLoggedIn={whoLoggedIn} />
            <Grid container>
                <Grid item md={12} sx={{ mb: 2 }}>
                    <BookingAppointment
                        date={date}
                        slot={slot}
                        disable={disable}
                        setitems={setitems}
                        setDisabled={setDisabled}
                        handleClick={handleClick}
                        handleSlot={handleSlot}
                        handleSubmit={handleSubmit}
                        setSlot={setSlot}
                        setDate={setDate}
                    />
                </Grid>
                <Appointments items={items} handleRemove={handleRemove} date={date} />
            </Grid>
        </>
  )
}

export default BookingLandingPage
