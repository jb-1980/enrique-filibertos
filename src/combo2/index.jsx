import React from 'react'
import ReactDOM from 'react-dom'
import { StyleSheet, css } from 'aphrodite'
import { combos } from './combos'

const windowWidth = window.innerWidth
const windowHeight = window.innerHeight


const containerWidth = windowWidth / 4
const containerHeight = windowHeight / 3
const headerHeight = containerHeight * (2 / 9) // 60px on a 1080p resolution
const imgHeight = containerHeight - headerHeight
const border = 3

const styles = StyleSheet.create({
  combos: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    width: windowWidth,
  },
  combo: {
    flex: 1,
    maxWidth: containerWidth,
    height: containerHeight,
    border: `${border}px solid #000`,
  },
  comboHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    maxWidth: containerWidth,
    minWidth: containerWidth,
    height: headerHeight,
    backgroundColor: '#fff',
    color: '#000',
  },
  number: {
    flex: 0,
    minWidth: headerHeight*1.02,
    minHeight: headerHeight*1.02,
    width: headerHeight*1.02,
    height: headerHeight*1.02,
    fontSize: 0.55 * headerHeight,
    backgroundColor: 'rgb(238, 242, 8)',
    borderRadius: '50%',
    border: `${headerHeight / 20}px solid #e10707`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
    color: '#e10707',
    transform: `translateY(7%)`,
    marginLeft: 5,
  },
  title: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  price: {
    flex: 0,
    backgroundColor: '#000',
    borderRadius: `${headerHeight}px 0 0 ${headerHeight}px`,
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 0.5 * headerHeight,
    transform: `translateY(${headerHeight / 30}px)`,
  },
  fontTopPadding: {
    transform: `translateY(${0.1*headerHeight}px)`,
  },
  img: {
    borderRadius: `0 0 ${headerHeight}px ${headerHeight}px`,
    width: containerWidth,
    height: imgHeight,
  },
})

export default class Combos extends React.Component {
  render() {
    const combosComponents = combos.splice(0, combos.length - 2).map( (combo, i) => (
      <div className={css(styles.combo)} key={i} id={combo._id}>
        <div className={css(styles.comboHeader)}>
          <div className={combo.number ? css(styles.number) : ''}>
            <div className={css(styles.fontTopPadding)}>
              {combo.number}
            </div>
          </div>
          <div className={`${css(styles.title)} title`} style={{fontSize: 80}}>
            <div className={css(styles.fontTopPadding)}>
              {combo.title}
            </div>
          </div>
          <div className={css(styles.price)}>
            <div className={css(styles.fontTopPadding)}>
              {combo.price}
            </div>
          </div>
        </div>
        <img className={css(styles.img)} src={`../../assets/images/${combo.img}`} alt={combo.title}/>
      </div>
    ))

    const lastCombosComponents = combos.splice(combos.length - 2).map( (combo, i) => (
      <div className={css(styles.combo)} key={i} id={combo._id}>
        <div className={css(styles.comboHeader)}>
          <div className={combo.number ? css(styles.number) : ''}>
            <div className={css(styles.fontTopPadding)}>
              {combo.number}
            </div>
          </div>
          <div className={`${css(styles.title)} title`} style={{fontSize: 80}}>
            <div className={css(styles.fontTopPadding)}>
              {combo.title}
            </div>
          </div>
          <div className={css(styles.price)}>
            <div className={css(styles.fontTopPadding)}>
              {combo.price}
            </div>
          </div>
        </div>
        <img className={css(styles.img)} src={`../../assets/images/${combo.img}`} alt={combo.title}/>
      </div>
    ))

    const promos = [
      {
        name: "Chicken Nuggets Kid's Meal",
        img: "Chicken_Nuggets_Kid's_Meal.jpg"
      },
      {
        name: "Bean Burrito Kid's Meal",
        img: "Jr_Bean_Burrito_Kid's_Meal.jpg"
      },
      {
        name: "Quesadilla Kid's Meal",
        img: "Jr._Quesadilla_Kid's_Meal.jpg"
      },
    ].map((promo, i) =>
      <div className="promo" key={`promo-${i}`}
        style={{
          width: containerWidth,
          height: containerHeight,
        }}>
        <img
          className="promo-image"
          style={{
            width: containerWidth,
            height: containerHeight,
          }}
          src={`../../assets/images/2017/kids/${promo.img}`}
        />
        <div className="promo-title" style={{
          width: containerWidth - 20,
          fontSize: '2em',
          color: 'rgb(240, 103, 16)',
          textTransform: 'uppercase',
          fontWeight: 'bolder',
          textAlign: 'center',
        }}
        >
          {promo.name}
        </div>
      </div>

    )

    return (
      <div className={css(styles.combos)} id="combos">
        {combosComponents}
        <div className={css(styles.combo)}>
          <img style={{
              width: '100%',
              height: '100%'
            }} src='../../assets/images/filibertos-logo.png' alt='logo'/>
        </div>
        <div style={{
          width: containerWidth,
          height: containerHeight,
          border: `${border}px solid #000`,
          overflow: 'hidden',
        }}>
          {promos}
        </div>
        {lastCombosComponents}

      </div>
    )
  }
}

ReactDOM.render(
  <Combos/>,
  document.getElementById('app')
)
