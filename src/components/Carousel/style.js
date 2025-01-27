import styled, { keyframes } from "styled-components"
import { devices } from "../../utils/constants"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const FadeIn = styled.div`
  animation: ${fadeIn} 0.5s ease-in-out;
`

export const CarouselContainer = styled.div`
  display: grid;
  gap: 1rem;
  max-width: 100%;
  grid-template-columns: 1fr;
  margin-top: 2rem;
  margin: auto;
  place-items: center;
  @media ${devices.md} {
    grid-template-columns: repeat(2, 1fr);
    place-items: unset;
    padding-left: 2rem;
  }
  @media ${devices.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Card = styled.div`
  display: flex-col;
  height: 100%;
  min-height: 0;
  border-radius: 8px;
  margin: 0 1rem;
  max-width: 300px;
  overflow: hidden;
  cursor: pointer;
`

export const CardContent = styled.div`
  display: flex-col;
  height: 100px;
  min-height: 0;
  padding: 1rem 1rem 1rem;
`

export const CardSubtitle = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0.5rem 0;
`

export const CardImage = styled.img`
  width: 92%;
  height: 425px;
`

export const ViewLink = styled.a`
  display: block;
  margin-top: 1rem;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
