import * as React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'

import Grid from '@mui/material/Grid'
import StarIcon from '@mui/icons-material/StarBorder'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import Container from '@mui/material/Container'
import { CardActionArea } from '@mui/material'

function Copyright (props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const tiers = [
  {
    title: 'WeekDay',
    price: '90',
    description: [
      'RVT VIDEO: $19',
      'RVT VIDEO: $29'
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined'
  },
  {
    title: 'Tandem Video',
    price: '125',
    description: [
      'RVT VIDEO: $19 ',
      'RVT VIDEO: $29 '
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained'
  },
  {
    title: 'Video And Photo',
    price: '230',
    description: [
      'RVT VIDEO: $99 ',
      'RVT VIDEO: $89 '
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined'
  },
  {
    title: 'Solo',
    price: '350',
    description: [
      'RVT VIDEO: $99 ',
      'RVT VIDEO: $89 '
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined'
  }
]

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations']
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one'
    ]
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource']
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use']
  }
]

function PricingContent () {
  return (
    <React.Fragment>
      <Container disableGutters maxWidth="sm" component="article" sx={{ pt: 1, pb: 6 }}>
        <Typography
          component="h6"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" component="p">
          Kindly find our pricings here.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="article">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={6}
            >
              <Card>
              <CardActionArea sx={{ cursor: 'default' }}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center'
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700]
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2
                    }}
                  >
                    <Typography component="h5" variant="h4" color={tier.price > 100 ? 'red' : 'black'}>
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /dive
                    </Typography>
                  </Box>
                  <ul sx={{ p: 0 }}>
                    {tier.description.map((line) => (
                      <Typography
                        component="div"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6]
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </React.Fragment>
  )
}

export default function Pricing () {
  return <PricingContent />
}
