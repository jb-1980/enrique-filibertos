import React from 'react'
import ReactDOM from 'react-dom'
import { StyleSheet, css } from 'aphrodite'

import Section from './Section'
import { menuitems } from './menuitems'
import Promo1 from './Promo1'
import Promo2 from './Promo2'
import Promo3 from './Promo3'

const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

const columnWidth = (windowWidth - 4) / 4

const styles = StyleSheet.create({
  columns: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  column: {
    flex: 1,
    padding: 10,
    position: 'relative',
    height: windowHeight,
  },
  disclaimer: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 20,
    flex: 1,
    color: 'rgb(222, 245, 84)',
  },

})

export default class Extras extends React.Component {
  render() {
    const column1 = menuitems.slice(0,2).map( (section, i) =>
      <Section
        key={i}
        name={section.name}
        description={section.description}
        items={section.items}/>
    )

    const column2 = menuitems[2]
    const column3 = menuitems.slice(3,5).map( (section, i) =>
      <Section
        key={i}
        name={section.name}
        description={section.description}
        items={section.items}/>
    )

    return (
      <div className={css(styles.columns)}>
        <div className={css(styles.column)}>
          {column1}
          <Promo1 />
        </div>
        <div className={css(styles.column)}>
          <Section
            name={column2.name}
            description={column2.description}
            items={column2.items}
          />
          <div className={css(styles.disclaimer)}>
            *Consuming raw eggs, undercooked meat or seafood may increase your
            risk of foodbourne illness. Prices subject to change without notice.
            Tax not included.
          </div>
        </div>
        <div className={css(styles.column)}>
          {column3}
          <Promo2 />
        </div>
        <div className={css(styles.column)}>
          <Section
            name={menuitems[5].name}
            description={menuitems[5].description}
            items={menuitems[5].items}/>
          <Promo3 />

          <Section
            name={menuitems[7].name}
            description={menuitems[7].description}
            items={menuitems[7].items}
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Extras/>,
  document.getElementById('app')
)
