import React from "react"
import ReactDOM from "react-dom"
import { StyleSheet, css } from "aphrodite"
import { combos } from "./combos"
import { autoSizeText, transitionPromo } from "../utils"

const windowWidth = 1920
const windowHeight = 1080
const border = 3
const containerWidth = windowWidth / 4 - 2 * border
const containerHeight = windowHeight / 3 - 2 * border
const headerHeight = containerHeight * (2 / 9) // 60px on a 1080p resolution
const imgHeight = containerHeight - headerHeight

const styles = StyleSheet.create({
  combos: {
    width: windowWidth,
    height: windowHeight,
    display: "flex",
    flexWrap: "wrap",
  },
  combo: {
    // maxWidth: containerWidth,
    // height: containerHeight,
    border: `${border}px solid #000`,
  },
  comboHeader: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: containerWidth,
    minWidth: containerWidth,
    width: containerWidth,
    height: headerHeight,
    backgroundColor: "#fff",
    color: "#000",
  },
  number: {
    minWidth: headerHeight * 1.02,
    minHeight: headerHeight * 1.02,
    width: headerHeight * 1.02,
    height: headerHeight * 1.02,
    fontSize: 0.55 * headerHeight,
    backgroundColor: "rgb(238, 242, 8)",
    borderRadius: "50%",
    border: `${headerHeight / 20}px solid #e10707`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
    color: "#e10707",
    transform: `translateY(7%)`,
    marginLeft: 5,
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    maxWidth: 285,
    maxHeight: 79,
  },
  price: {
    backgroundColor: "#000",
    borderRadius: `${headerHeight}px 0 0 ${headerHeight}px`,
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 0.5 * headerHeight,
    transform: `translateY(${headerHeight / 30}px)`,
    marginLeft: "auto",
  },
  fontTopPadding: {
    transform: `translateY(${0.1 * headerHeight}px)`,
  },
  img: {
    borderRadius: `0 0 ${headerHeight}px ${headerHeight}px`,
    width: containerWidth,
    height: imgHeight,
  },
})

export default class Combos extends React.Component {
  componentDidMount() {
    this.intervalId = setInterval(transitionPromo, 7777)
    setTimeout(() => autoSizeText(".title", "Special Elite"), 30)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const combosComponents = combos.map((combo, i) => (
      <div className={css(styles.combo)} key={i} id={combo._id}>
        <div className={css(styles.comboHeader)}>
          <div className={combo.number ? css(styles.number) : ""}>
            <div className={css(styles.fontTopPadding)}>{combo.number}</div>
          </div>
          <div
            className={`${css(styles.title, styles.fontTopPadding)} title`}
            style={{ fontSize: `${combo.fontSize}em` }}
          >
            {combo.title}
          </div>
          <div className={css(styles.price)}>
            <div className={css(styles.fontTopPadding)}>{combo.price}</div>
          </div>
        </div>
        <img
          className={css(styles.img)}
          src={`../../assets/images/${combo.img}`}
          alt={combo.title}
        />
      </div>
    ))

    const promos = ["Burritos.jpg", "daily_specials.jpg"].map((promo, i) => (
      <img
        key={i}
        className="promo-image"
        style={{
          width: 2 * containerWidth,
          height: containerHeight,
        }}
        src={`../../assets/images/promos/${promo}`}
      />
    ))

    return (
      <div className={css(styles.combos)} id="combos">
        {combosComponents}
        <div
          style={{
            width: 2 * containerWidth,
            height: containerHeight,
            border: `${border}px solid #000`,
            overflow: "hidden",
            position: "relative",
          }}
        >
          {promos}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Combos />, document.getElementById("app"))
