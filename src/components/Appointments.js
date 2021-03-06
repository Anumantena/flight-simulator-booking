import * as React from 'react'
import PropTypes from 'prop-types'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { CardActionArea, CardActions, IconButton, Typography } from '@mui/material'

import EventIcon from '@mui/icons-material/Event'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

function Appointments (props) {
  const { items, handleRemove, date, handleEdit } = props

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password')
    })
  }

  return (
    <Grid item xs={12} md={6}>
      <Box component="form" noValidate onSubmit={handleSubmit}>
        <Typography
          component="h6"
          variant="h6"
          color="primary"
          gutterBottom
          sx={{
            color: 'black'
          }}
        >
          Appointments booked:
        </Typography>
        {items.length > 0 ? (
          <Grid container spacing={2}>
            {items.map((card) => (
              <Grid item key={card} xs={4} sm={4} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <CardActionArea sx={{ cursor: 'default' }}>
                    <CardContent sx={{ flexGrow: 1, pb: 0 }}>
                      <Typography
                        display="flex"
                        justifyContent="left"
                        alignItems="center"
                      >
                        <EventIcon />
                        <span> - {card.date}</span>
                      </Typography>
                      <Typography
                        display="flex"
                        justifyContent="left"
                        alignItems="center"
                        sx={{ mt: 2, mb: 1 }}
                      >
                        <AccessTimeIcon />
                        <span> - {card.slot} </span>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      onClick={(e) => handleRemove(card)}
                    >
                      <DeleteIcon />
                    </IconButton>

                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      onClick={(e) => handleEdit(card)}
                    >
                      <EditIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          'No Appointments found.'
        )}
      </Box>
    </Grid>
  )
}

Appointments.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
}

export default Appointments
