import styled from "styled-components"

const theme = {
  primaryDark: "#0D0C1D",
  primaryLight: "#EFFFFA",
  primaryHover: "#343078",
  mobile: "768px"
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
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  display: flex;
  flex-direction: column;
  margin-top: 25rem;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${theme.mobile}) {
    width: 100%;
  }
`
