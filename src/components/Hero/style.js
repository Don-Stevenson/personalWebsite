import styled from "styled-components"
import { devices } from "../../utils/constants"

export const Title = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-weight: bolder !important;
  text align: center;
  font-size: 4.55rem;
  padding: 2.5 rem;
  color: #212529;
 @media ${devices.md} {
  font-size: 6rem;
  padding: 4 rem;
  text-align: left;
  }
`
export const SubTitle1 = styled.div`
  color: #212529;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  text align: center;
  margin-bottom: 0.5rem;
  font-weight: 300 !important;
  font-size: 3.5rem;
  @media ${devices.md} {
   text-align: left;
  }
`
export const SubTitle2 = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-weight: 300 !important;
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: #212529;
  text align: center;
  @media ${devices.md} {
    text-align: left;
  }
`
export const Container = styled.div`
  display: flex-col;
  margin: 1.5rem;
  margin-bottom: 2rem;
  @media ${devices.md} {
    margin: 2rem;
    margin-bottom: 8rem;
  }
`
