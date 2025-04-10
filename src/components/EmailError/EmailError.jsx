import styles from "./EmailError.module.css"

export function EmailError({ errorMsg }) {
  return (
    <div className={styles.errorContainer}>
      {errorMsg && <p className={styles.errorText}>{errorMsg || ""}</p>}
    </div>
  )
}
