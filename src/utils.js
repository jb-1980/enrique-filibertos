const resizeText = (el, fontFamily) => {
  const style = el.style.fontSize
  const fontSize = parseFloat(style.slice(0, -2))
  el.style.fontSize = fontSize + 0.1 + "em"
  el.fontFamily = fontFamily
  return el
}

export const autoSizeText = (selector, fontFamily) => {
  // retrieve all title elements
  const elements = Array.from(document.querySelectorAll(selector))
  console.log(elements)
  if (elements.length === 0) {
    return
  }

  elements.forEach(el => {
    console.log("first pass", el.scrollHeight, el.offsetHeight)
    let counter = 0
    while (el.scrollHeight <= el.offsetHeight && counter < 80) {
      el = resizeText(el, fontFamily)
      console.log(el.scrollHeight, el.offsetHeight, el.style.fontSize)
      counter += 1
    }

    const style = el.style.fontSize
    const fontSize = parseFloat(style.slice(0, -2))
    el.style.fontSize = fontSize - 0.1 + "em"
    el.fontFamily = fontFamily
  })
}

export const transitionPromo = () => {
  var nodes = Array.from(document.querySelectorAll(".promo-image"))
  if (nodes.length === 0) return

  var activeNodeIndx, nextNodeIndx, previousNodeIndex

  nodes.forEach((node, i) => {
    if (node.classList.contains("active")) {
      activeNodeIndx = i
      return
    }

    node.classList.remove("moveup")
  })

  if (activeNodeIndx === undefined) {
    //active class has not been added yet
    activeNodeIndx = 0
    nextNodeIndx = 1
    previousNodeIndex = activeNodeIndx
  } else if (activeNodeIndx === 0) {
    nextNodeIndx = nodes.length - 1
    previousNodeIndex = activeNodeIndx
  } else {
    nextNodeIndx = activeNodeIndx - 1
    previousNodeIndex = activeNodeIndx
  }

  nodes[nextNodeIndx].classList.add("active")
  nodes[previousNodeIndex].classList.add("moveup")
  nodes[previousNodeIndex].classList.remove("active")
}
