import styled from "styled-components"
import { devices } from "../../utils/constants"
export const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 0.5rem;
  height: 1.5rem;
  @media ${devices.md} {
    height: 2rem;
  }
`
export const CopyrightContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 0.9rem;
`

export const HrLine = styled.hr`
  border-top: 1px solid lightgrey;
`
