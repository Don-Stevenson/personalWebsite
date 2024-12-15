import styled from "styled-components"
import theme from "../../utils/theme"
import { devices } from "../../utils/constants"

export const NameAndMenuContainer = styled.div`
  display: flex;
  margin: 0.5rem;
  justify-content: end;
`

export const HrLine = styled.hr`
  border-top: 1px solid lightgrey;
`
export const NavBarWrapper = styled.div`
  display: flex-col;
`

export const Link = styled.a`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 1rem;
  color: ${theme.primaryDark};
  text-decoration: none;
  transition: color 0.3s linear;
`
export const LinksWrapper = styled.div`
  @media ${devices.md} {
    display: flex;
    gap: 1rem;
    align-items: end;
    margin: 1rem;
  }
  display: none;
`
