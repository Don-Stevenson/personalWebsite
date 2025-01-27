import styled from "styled-components"
import { devices } from "../../utils/constants"

export const Title = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-weight: bolder !important;
  font-size: 3.75rem;
  padding: 2.5 rem;
  color: #212529;
  @media ${devices.md} {
    font-size: 4.55rem;
    font-size: 6rem;
    padding: 4 rem;
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
  font-size: 2.5rem;
  @media ${devices.md} {
   font-size: 3.5rem;
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
  margin-bottom: 5rem;
  @media ${devices.md} {
    margin-bottom: 0;
    text-align: left;
  }
`
export const Container = styled.div`
  display: flex-col;
  padding: 0 1rem;
  margin-bottom: 2rem;
  @media ${devices.md} {
    margin: 2rem;
    margin-bottom: 8rem;
  }
`
