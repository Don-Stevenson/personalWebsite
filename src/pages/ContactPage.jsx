import React from "react"
import Hero from "../components/Hero/Hero"
import Useform from "../UseForm"
import { devices } from "../utils/constants"
import { Blocks } from "react-loader-spinner"
import styles from "./ContactPage.module.css"

const ContactPage = ({ title }) => {
  const { handleSubmit, handleChange, state, errors, isSubmitting } = Useform()
  const [showSuccess, setShowSuccess] = React.useState(false)

  React.useEffect(() => {
    let timeoutId
    if (state.emailSent) {
      setShowSuccess(true)
      timeoutId = setTimeout(() => {
        setShowSuccess(false)
      }, 2000)
    }
    return () => clearTimeout(timeoutId)
  }, [state.emailSent])

  return (
    <div className={styles.pageContainer}>
      <Hero title={title} />
      <div className={styles.contentWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formWrapper}>
            <label className={styles.label} htmlFor="full-name">
              Name
            </label>
            <input
              className={styles.formInput}
              id="full-name"
              name="name"
              type="text"
              value={state.name}
              onChange={handleChange}
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
              value={state.email}
              onChange={handleChange}
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
              value={state.message}
              onChange={handleChange}
              required
            />
          </div>
          {errors.email ? (
            <p className={styles.errorText}>{errors.email}</p>
          ) : (
            !errors.email && (
              <p className={styles.placeholderText}>
                placeholderText placeholderText
              </p>
            )
          )}
          <div className={styles.submittingWrapper}>
            <button
              className={styles.submitButton}
              type="submit"
              disabled={state.disabled}
            >
              Send
            </button>
            {isSubmitting && (
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
                  Please allow up to 30 seconds for the message to send
                </p>
              </div>
            )}
          </div>
          {showSuccess && (
            <p className={styles.successMessage}>Message Sent!</p>
          )}
        </form>
      </div>
    </div>
  )
}

export default ContactPage
