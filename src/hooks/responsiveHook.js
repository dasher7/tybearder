import { useState, useEffect } from "react"

export function getWindowSize() {
  const { innerHeight: height, innerWidth: width } = window

  return {
    height,
    width,
  }
}

export default function useWindowsDimension() {
  const [windowsDimension, setWindowsDimension] = useState(getWindowSize())

  useEffect(() => {
    function handleResize() {
      setWindowsDimension(getWindowSize())
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowsDimension
}
