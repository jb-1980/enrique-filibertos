import React from 'react'

const breakfastPlatters = [
  {
    name: 'Chorizo Plate',
    img: 'Filibertos-Chorizo-60-Light-600x600.jpg'
  },
  {
    name: 'Huevos Rancheros',
    img: 'Filibertos-Huevos-Rancheros-60-Light-600x600.jpg',
  },
  {
    name: 'Machaca',
    img: 'Filibertos-Machaca-90-Light-600x600.jpg',
  },
  {
    name: 'Spanish Omelet',
    img: 'Filibertos-Spanish-Omelet-60-Light-600x600.jpg',
  },
  {
    name: 'Steak Ranchero',
    img: 'Filibertos-Steak-Ranchero-60-Light-600x600.jpg',
  },
]

const burritos = [
  {
    name: 'Adobada Burrito',
    img: 'Adobada_Burrito.jpg',
  },
  {
    name: 'Arizona Burrito',
    img: 'Arizona_Burrito.jpg',
  },
  {
    name: 'Bean Burrito',
    img: 'Bean_Burrito.jpg',
  },
  {
    name: 'Beef Burrito',
    img: 'Beef_Burrito.jpg',
  },
  {
    name: 'Cabeza Burrito',
    img: 'Cabezo_Burrito.jpg',
  },
  {
    name: 'California Burrito',
    img: 'California_Burrito.jpg',
  },
  {
    name: 'Carne Asada Burrito',
    img: 'Carne_Asada_Burrito.jpg',
  },
  {
    name: 'Carnitas Burrito',
    img: 'Carnitas_Burrito.jpg',
  },
  {
    name: 'Chicken Burrito',
    img: 'Chicken_Burrito.jpg',
  },
  {
    name: 'Chile Relleno Burrito',
    img: 'Chile_Relleno_Burrito.jpg',
  },
  {
    name: 'Chimichanga',
    img: 'Chimichanga.jpg',
  },
  {
    name: 'Extreme Fajita Burrito',
    img: 'Extreme_Fajita_Burrito.jpg',
  },
  {
    name: 'Fish Burrito',
    img: 'Fish_Burrito.jpg',
  },
  {
    name: 'El Gordo Burrito',
    img: 'Gordo_Burrito.jpg',
  },
  {
    name: 'Green Chile Burrito',
    img: 'Green_Chile_Burrito.jpg',
  },
  {
    name: 'Patron Burrito',
    img: 'Patron_Burrito.jpg',
  },
  {
    name: 'Pollo Asado Burrito',
    img: 'Pollo_Asado_Burrito.jpg',
  },
  {
    name: 'Shrimp Burrito',
    img: 'Shrimp_Burrito.jpg',
  },
  {
    name: 'Texas Burrito',
    img: 'Texas_Burrito.jpg',
  },
  {
    name: 'Veggie Burrito',
    img: 'Veggie_Burrito.jpg',
  },
]
const windowWidth = window.innerWidth
const columnWidth = (windowWidth - 4) / 4

const Promo1 = () =>
  <div>
    {
      breakfastPlatters.map( (image, i) => {
        return (
          <div key={i} className='promo1 breakfast-platters'
            style={{
              width: columnWidth-20,
            }}>
            <div className='promo1-text'>{image.name}</div>
            <img src={`../../assets/images/breakfastplatters/${image.img}`}
              style={{
                width: '100%',
                height: 300,
                opacity: 'inherit',
                borderRadius: 10,
              }}/>
          </div>
        )
      })
    }
    {
      burritos.map( (image, i) => {
        return (
          <div key={i} className='promo1 burritos'
            style={{
              width: columnWidth-20,
            }}>
            <div className='promo1-text'>{image.name}</div>
            <img src={`../../assets/images/2017/burritos/${image.img}`}
              style={{
                width: '100%',
                height: 300,
                opacity: 'inherit',
                borderRadius: 10,
              }}/>
          </div>
        )
      })
    }
  </div>

export default Promo1
