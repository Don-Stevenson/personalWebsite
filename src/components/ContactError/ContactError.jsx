import styles from "./ContactError.module.css"
export function ContactError({ errorMsg }) {
  return (
    <div className={styles.errorContainer}>
      {errorMsg && <p className={styles.errorText}>{errorMsg || ""}</p>}
    </div>
  )
}
