import styled from "styled-components"
import theme from "../../../utils/theme"

export const Link = styled.a`
  font-size: 0.9rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
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
  opacity: 0.87;
  height: 80vh;
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
`
