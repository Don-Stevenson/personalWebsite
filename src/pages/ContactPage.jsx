import { useState, useEffect } from "react"
import Hero from "../components/Hero/Hero"
import Useform from "../UseForm"
import { Blocks } from "react-loader-spinner"
import styles from "./ContactPage.module.css"
import { EmailError } from "../components/EmailError/EmailError"

const ContactPage = ({ title }) => {
  const { handleChange, handleSubmit, formData, formErrors, isSubmitting } =
    Useform()

  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    let timer

    if (formData.emailSent === true) {
      setShowSuccess(true)

      timer = setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
    } else if (formData.emailSent === false || formData.emailSent === null) {
      setShowSuccess(false)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [formData.emailSent])

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
              value={formData.name}
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
              value={formData.email}
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
              value={formData.message}
              onChange={handleChange}
              required
            />
            {formErrors.message && (
              <p className={styles.errorText}>{formErrors.message || ""}</p>
            )}
          </div>
          <EmailError errorMsg={formErrors.message || ""} />
          <div className={styles.submittingWrapper}>
            <button
              className={styles.submitButton}
              type="submit"
              disabled={formData.isDisabled}
            >
              Send
            </button>
            {formErrors.name && (
              <p className={styles.errorText}>{formErrors.name || ""}</p>
            )}
            {formErrors.email && (
              <p className={styles.errorText}>{formErrors.email || ""}</p>
            )}
            {formErrors.message && (
              <p className={styles.errorText}>{formErrors.message || ""}</p>
            )}
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
            {showSuccess && (
              <div className={styles.successMessageContainer}>
                <p className={styles.successMessage}>Message Sent!</p>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
