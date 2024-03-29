import styled, { css, keyframes } from "styled-components"

// const fadeIn = keyframes`
// 0% {
//   opacity: 0;
// }

// 100% {
// opacity: 1;
// }`

export const PageContainer = styled.div`
  background-color: #070707;
  display: flex;
  // min-height: 100vh;
  flex-direction: column;
  display: flex;
  flex-flow: column;
  // height: 100%;
  height: 100vh;
  // max-height: 100vh;
`

export const FadeContainer = styled.div`
  opacity: ${({ opacity }) => opacity};
  // opacity: 1;
  background-color: #070707;
  overflow: hidden;
  // display: flex;
  // flex-flow: column;
  // min-height: 100vh;
  // max-height: 100vh;
  height: 100vh;
  // height: 100%;
  // text-align: center;
  width: 100vw;
  // align-items: center;
  transition: opacity 0.3s ease;
`

export const Outer = styled.div`
  background-color: #070707;
`

export const MainContent = styled.main`
  // padding-top: 20px;
  // padding-bottom: 20px;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  position: relative;
  // overflow: hidden;

  // max-width: 1350px;

  // border: 2px solid green;
`
