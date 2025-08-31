"use client"
import React, { useEffect, useState } from "react"
import styles from "./AboutPage.module.css"
import { useRouter } from "next/navigation"

export default function HomePage({ title, subTitle, text }) {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("https://donstevenson.dev")
    }, 5000)
  }, [])

  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1)
    }, 1000)
  }, [])
  return (
    <>
      <div
        className={styles.contentSection}
        style={{
          display: "flex-column",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "10rem",
        }}
      >
        Redirecting to the new page https://donstevenson.dev in {countdown}{" "}
        seconds...
        <div style={{ height: "1rem" }} />
        <a className={styles.contentSection} href="https://donstevenson.dev">
          Or click here to go to new page
        </a>
      </div>
    </>
  )
}
