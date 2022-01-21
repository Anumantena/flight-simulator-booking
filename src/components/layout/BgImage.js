import * as React from 'react'
import PropTypes from 'prop-types'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'

function BgImage (props) {
  const { bgProps, whoLoggedIn } = props

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${bgProps.image})`
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={bgProps.image} alt={bgProps.imageText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)'
        }}
      />
      <Grid container>
        <Grid item md={8}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 4, md: 6 },
              pr: { md: 0 }
            }}
          >
            <Typography component="h2" variant="h3" color="inherit" gutterBottom>
              Hello {whoLoggedIn},
              <Typography component="h2" variant="h3" color="inherit" gutterBottom>
                Welcome to {bgProps.title}
              </Typography>
            </Typography>
            <Typography variant="h5" color="inherit" paragraph sx={{
              pr: 40
            }}>
              {bgProps.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

BgImage.propTypes = {
  bgProps: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
}

export default BgImage
