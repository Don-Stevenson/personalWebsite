"use client"
import { useState, useEffect } from "react"
import Hero from "../components/Hero/Hero"
import Useform from "../UseForm"
import { Blocks } from "react-loader-spinner"
import styles from "./ContactPage.module.css"
import { ContactError } from "../components/ContactError/ContactError"

const ContactPage = ({ title }) => {
  const {
    handleInputChange,
    handleFormSubmit,
    formState,
    validationErrors,
    isSending,
  } = Useform()

  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    let timer

    if (formState.emailSent === true) {
      setShowSuccess(true)

      timer = setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
    } else if (formState.emailSent === false || formState.emailSent === null) {
      setShowSuccess(false)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [formState.emailSent])

  console.log({ validationErrors })
  return (
    <div className={styles.pageContainer}>
      <Hero title={title} />
      <div className={styles.contentWrapper}>
        <form onSubmit={handleFormSubmit}>
          <div className={styles.formWrapper}>
            <label className={styles.label} htmlFor="full-name">
              Name
            </label>
            <input
              className={styles.formInput}
              id="full-name"
              name="name"
              type="text"
              value={formState.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formWrapper}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.formInput}
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formWrapper}>
            <label className={styles.label} htmlFor="message">
              Message
            </label>
            <input
              className={styles.formInput}
              id="message"
              name="message"
              rows="3"
              value={formState.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.submittingWrapper}>
            <button
              className={styles.submitButton}
              type="submit"
              disabled={formState.isDisabled}
            >
              Send
            </button>

            {isSending && (
              <div className={styles.loadingContainer}>
                <Blocks
                  height="35"
                  width="35"
                  color="#007bff"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  visible={true}
                />
                <p className={styles.textLightGrey}>
                  Please allow up to 5 seconds for the message to send
                </p>
              </div>
            )}
            <div className={styles.sendMessageContainer}>
              {(validationErrors.message ||
                validationErrors.email ||
                validationErrors.name) && (
                <ContactError
                  errorMsg={
                    validationErrors.message ||
                    validationErrors.email ||
                    validationErrors.name ||
                    ""
                  }
                />
              )}
              {showSuccess && (
                <div className={styles.successMessageContainer}>
                  <p className={styles.successMessage}>Message Sent!</p>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
