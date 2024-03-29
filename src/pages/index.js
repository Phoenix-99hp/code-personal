import React, { useReducer, useEffect, useContext } from "react"
import Layout from "../components/Layout/Layout"
import IndexHero from "../components/IndexHero/IndexHero"
import Code from "../components/Code/Code"
import Recalculating from "../components/Recalculating/Recalculating"
import { AnimationContext } from "../contexts/GlobalContext"

const IndexPage = () => {
  const { show } = useContext(AnimationContext)
  const initialState = {
    rowsNum: null,
    rowsArr: [],
    isCalculating: true,
    hasError: false,
    recalculate: true,
    timeouts: [],
    isRecalculating: false,
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case "CALCULATE_ROWS":
        return {
          ...state,
          isCalculating: true,
          hasError: false,
        }
      case "RECALCULATE_ROWS":
        return {
          ...state,
          isCalculating: true,
          hasError: false,
          isRecalculating: true,
        }
      case "DONE_CALCULATING":
        return {
          ...state,
          isCalculating: false,
          hasError: false,
          rowsNum: action.payload.length,
          rowsArr: action.payload,
          recalculate: true,
          isRecalculating: false,
        }
      case "CALCULATION_FAILURE":
        return {
          ...state,
          hasError: true,
          isCalculating: false,
        }
      case "DISABLE_RECALC":
        return {
          ...state,
          recalculate: false,
        }
      case "ENABLE_RECALC":
        return {
          ...state,
          recalculate: true,
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const delay = t => {
    state.timeouts.forEach(t => clearTimeout(t))
    dispatch({
      type: "RECALCULATE_ROWS",
    })
    return new Promise(function (resolve) {
      state.timeouts.push(
        setTimeout(() => {
          resolve(null)
        }, t)
      )
    })
  }

  const initialCalculation = () => {
    dispatch({
      type: "CALCULATE_ROWS",
    })
    const breakpoint = window.innerWidth > 850 ? false : true
    const landscape = window.matchMedia("(orientation: landscape)").matches
      ? true
      : false

    const height = landscape
      ? window.innerHeight - 114
      : window.innerHeight > 1000 && !breakpoint
      ? 1000 - 114
      : window.innerHeight > 1000 && breakpoint
      ? 1000 - 242
      : breakpoint
      ? window.innerHeight - 242
      : window.innerHeight - 114
    const rows = Math.floor(height / 20)
    const rowsArr = []

    for (let i = 0; i < rows; i++) {
      rowsArr.push(i)
    }
    dispatch({
      type: "DONE_CALCULATING",
      payload: rowsArr,
    })
  }

  const calculateRows = () => {
    if (state.recalculate && show) {
      delay(1000).then(() => {
        const breakpoint = window.innerWidth > 850 ? false : true
        const landscape = window.matchMedia("(orientation: landscape)").matches
          ? true
          : false

        const height = landscape
          ? window.innerHeight - 114
          : window.innerHeight > 1000 && !breakpoint
          ? 1000 - 114
          : window.innerHeight > 1000 && breakpoint
          ? 1000 - 242
          : breakpoint
          ? window.innerHeight - 242
          : window.innerHeight - 114
        const rows = Math.floor(height / 20)
        const rowsArr = []

        for (let i = 0; i < rows; i++) {
          rowsArr.push(i)
        }
        dispatch({
          type: "DONE_CALCULATING",
          payload: rowsArr,
        })
      })
    }
  }

  const isScalingEventTouchStart = e => {
    if (e.touches.length === 2) {
      dispatch({ type: "ENABLE_RECALC" })
    } else {
      dispatch({ type: "DISABLE_RECALC" })
    }
  }

  const isScalingEventTouchMove = e => {
    if (state.recalculate) {
      calculateRows()
    }
  }

  const isScalingEventTouchEnd = e => {
    if (!state.recalculate) {
      dispatch({ type: "ENABLE_RECALC" })
    }
  }

  useEffect(() => {
    if (show) {
      window.addEventListener("touchstart", isScalingEventTouchStart)
      window.addEventListener("touchmove", isScalingEventTouchMove)
      window.addEventListener("touchend", isScalingEventTouchEnd)
      window.addEventListener("resize", calculateRows)
      initialCalculation()
    }
    return () => {
      window.removeEventListener("resize", calculateRows)
      window.removeEventListener("touchstart", isScalingEventTouchStart)
      window.removeEventListener("touchmove", isScalingEventTouchMove)
      window.removeEventListener("touchend", isScalingEventTouchEnd)
      state.timeouts.forEach(t => clearTimeout(t))
    }
  }, [])

  return (
    <>
      {state.isRecalculating && state.recalculate && show ? (
        <Recalculating />
      ) : !state.hasError &&
        (!state.isCalculating || !show || !state.recalculate) ? (
        <Layout>
          <IndexHero />
          {show ? (
            <Code rowsNum={state.rowsNum} rowsArr={state.rowsArr} />
          ) : null}
        </Layout>
      ) : null}
    </>
  )
}

export default IndexPage
