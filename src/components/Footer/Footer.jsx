import React from "react"
import styles from "./Footer.module.css"

const year = new Date().toLocaleDateString("en-US", { year: "numeric" })

export default function Footer() {
  return (
    <>
      <hr className={styles.hrLine} />
      <div className={styles.container}>
        <div className={styles.copyrightContainer}>
          {`Custom site by Don Stevenson ©${year}`}
        </div>
      </div>
    </>
  )
}
