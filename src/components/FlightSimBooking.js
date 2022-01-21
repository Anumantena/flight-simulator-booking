import React, { useState, useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { teal, amber } from '@mui/material/colors'

import Staff from './Staff'
import SignIn from './layout/SignIn'

import Appbar from './layout/Appbar'
import BookingLandingPage from './BookingLandingPage'
import FAQs from './layout/FAQs'

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500]
    },
    secondary: {
      main: amber[500]
    }
  }
})

export default function FlightSimBooking () {
  const [date, setDate] = useState('')
  const [slot, setSlot] = useState('10:30AM-11:30AM')
  const [items, setitems] = useState([])
  const [disable, setDisabled] = useState(false)
  const [isloggedIn, setIsLoggedIn] = useState(false)
  const [whoLoggedIn, setWhologgedIn] = useState('')
  const [open, setOpen] = React.useState(false)
  const [isEditModal, setIsEditModal] = React.useState(false)

  const [prevDate, setPrevDate] = useState('')
  const [prevSlot, setPrevSlot] = useState('10:30AM-11:30AM')

  const handleClick = (e) => {
    setDate(e.target.value)
  }

  const handleSlot = (e) => {
    setSlot(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isEditModal) {
      items.map((item) => {
        if (
          (prevDate || prevSlot) &&
          (prevDate === item.date || prevSlot === item.slot)
        ) {
          item.date = date
          item.slot = slot
        }
        return item
      })

      setitems(items)
      alert('Successfully modified your appointment')
    } else {
      // [1,2] -> 1, 2, 3 -> [1,2,3]
      setitems([...items, { date: date, slot: slot }])
      setDisabled(true)

      alert('Successfully booked your appointment')
    }
  }

  const handleRemove = (item) => {
    const bookings = items.filter(
      (filteritem) => filteritem.date !== item.date
    )
    setitems(bookings)
  }

  // Handling login flag
  const handleLogin = () => {
    console.log('handleLogin called', isloggedIn)
    setIsLoggedIn(!isloggedIn)
  }

  //

  const handleEdit = (appnt) => {
    setOpen(true)

    setDisabled(false)
    setSlot(appnt.slot)
    setDate(appnt.date)

    // open
    // [1,2,]

    // 4

    // [..arr, 4]

    // edit
    // [1,2,4]

    // p1
    // 1

    // [..arr, 1]
    setPrevSlot(appnt.slot)
    setPrevDate(appnt.date)

    setIsEditModal(true)
  }

  const handleOpenAppointment = () => {
    setOpen(true)
    setIsEditModal(false)
  }
  const handleCloseAppointment = () => {
    setOpen(false)
    setSlot('10:30AM-11:30AM')
    setDate('')
  }

  // Authentication clean up here
  useEffect(() => {
    if (!isloggedIn) {
      setWhologgedIn('')
    }
  }, [isloggedIn])

  useEffect(() => {
    let matchDate = false
    items.forEach((item) => {
      console.log('disable', item.date, date)
      if (item.date === date) {
        matchDate = true
      }
    })
    console.log({ matchDate })
    if (matchDate && !isEditModal) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [date])

  console.log({ disable, whoLoggedIn, isloggedIn })

  const routes = {
    home: (
      <BookingLandingPage
        whoLoggedIn={whoLoggedIn}
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
        items={items}
        handleRemove={handleRemove}
        open={open}
        setOpen={setOpen}
        handleEdit={handleEdit}
        handleOpenAppointment={handleOpenAppointment}
        handleCloseAppointment={handleCloseAppointment}
        isEditModal={isEditModal}
      />
    ),
    faq: <FAQs />
  }

  const [displayRoute, setDisplayRoute] = useState('home')
  // Todo:
  // https://www.miamiskydivingcenter.com/rates-faqs
  const handlePageRoute = (route) => {
    setDisplayRoute(route)
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!isloggedIn ? (
        <SignIn handleLogin={handleLogin} setWhologgedIn={setWhologgedIn} />
      ) : (
        <Appbar handleLogin={handleLogin} handlePageRoute={handlePageRoute}>
          <Container
            maxWidth="xxl"
            sx={{
              px: 'auto',
              py: 3,
              mx: 0,
              bgcolor: '#f5f5f5',
              height: '100%'
            }}
          >
            <section>
              {!whoLoggedIn.includes('staff') ? (
                // Go to Customer
                routes[displayRoute]
              ) : (
                // Go to Staff
                <Grid container spacing={4}>
                  <Staff items={items} handleRemove={handleRemove} />
                </Grid>
              )}
            </section>
          </Container>
        </Appbar>
      )}
    </ThemeProvider>
  )
}
