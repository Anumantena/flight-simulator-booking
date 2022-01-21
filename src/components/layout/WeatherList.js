import React, {useState} from 'react'
import axios from 'axios'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import ListSubheader from '@mui/material/ListSubheader'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'

export default function WeatherList ({ itemData }) {
  const [weatherDates, setWeatherDates] = useState([])

  React.useEffect(() => {
    axios
      .get(
        'https://api.weatherapi.com/v1/forecast.json?key=bda0fad576df4b9ebb4161109221901&q=23508&days=10&aqi=no&alerts=no'
      )
      .then((json) => {
        setWeatherDates(json.data?.forecast?.forecastday)
        // console.log(json.data)

        //     json.data?.forecast?.forecastday.forEach((wd) => {
        //       console.log(wd.day.avgtemp_c, wd.date)
        //     })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <ImageList cols={5} gap={8}>
      <ImageListItem key="Subheader" cols={5}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {weatherDates.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={item?.day?.condition?.icon}
            alt={item?.day?.condition?.text}
            loading="lazy"
          />
          <ImageListItemBar
            title={item?.day?.condition?.text}
            subtitle={item.date}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item?.day?.condition?.text}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}
