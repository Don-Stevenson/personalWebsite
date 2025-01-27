import React from "react"

export default function CardInfo({ title, subTitle, link }) {
  return (
    <>
      <p>{title}</p>
      <p>{subTitle}</p>
      <a href={link} target="blank" rel="noopener noreferrrer">
        {" "}
        View Site / Code{" "}
      </a>
    </>
  )
}
