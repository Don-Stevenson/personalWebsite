import styled from "styled-components"
import theme from "../../../utils/theme"

export const Link = styled.a`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 1rem;
  padding: 1rem 0;
  color: ${theme.primaryDark};
  text-decoration: none;
  transition: color 0.3s linear;
  text-align: center;
`

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  opacity: 0.9;
  height: 20vh;
  margin-top: 25rem;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.4s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  z-index: 10;
  width: 150px;
  border: 1.5px solid lightgrey;
`
