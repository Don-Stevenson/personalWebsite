import styled from "styled-components"

const theme = {
  primaryDark: "#0D0C1D",
  primaryLight: "#EFFFFA",
  primaryHover: "#343078",
  mobile: "768px",
}

export const Link = styled.a`
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: ${theme.primaryDark};
  text-decoration: none;
  transition: color 0.3s linear;
  @media (max-width: ${theme.mobile}) {
    font-size: 1.5rem;
    text-align: center;
  }
`

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100vh;
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

  @media (max-width: ${theme.mobile}) {
    width: 100%;
  }
`
