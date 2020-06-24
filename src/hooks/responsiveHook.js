import { useState, useEffect } from "react"

export function getWindowSize() {
  if (window) {
    const { innerHeight: height, innerWidth: width } = window

    return {
      height,
      width,
    }
  } else {
    return {}
  }
}

export default function useWindowsDimension() {
  const [windowsDimension, setWindowsDimension] = useState({
    height: 1080,
    width: 1920,
  })
  useEffect(() => {
    function handleResize() {
      setWindowsDimension(getWindowSize())
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowsDimension
}
