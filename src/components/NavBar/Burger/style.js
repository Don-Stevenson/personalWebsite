import styled from "styled-components"
import theme from "../../../utils/theme"

export const StyledBurger = styled.button`
  @media (min-width: 768px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? theme.primaryDark : theme.primaryDark)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    opacity: ${({ open }) => (open ? "0" : "1")};
  }
`
