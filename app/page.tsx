import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.logoSection}>
          <Image
            src="/logo.png"
            alt="TriFactoria Logo"
            width={750}
            height={750}
            priority
            className={styles.logo}
          />
        </div>

        <div className={styles.cardSection}>
          <div className={styles.card}>
            <h1 className={styles.title}>TriFactoria Labs</h1>
            <p className={styles.description}>
              TriFactoria Labs is a small studio space for exploring systems, developer tools, and creative infrastructure.
            </p>
            <p className={styles.description}>
              Work here is experimental. Some projects become products. Others remain research.
            </p>

            <div className={styles.links}>
              <a
                href="https://www.rep-os.dev"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.link} ${styles.linkCyan}`}
              >
                <span className={styles.dot}></span>
                <span className={styles.linkText}>Rep<span className={styles.pinkText}>OS</span></span>
              </a>

              <a
                href="https://github.com/trifactoria"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.link} ${styles.linkMagenta}`}
              >
                <span className={styles.dot}></span>
                <span className={styles.linkText}>GitHub</span>
              </a>

              <a
                href="mailto:trifactoria@gmail.com"
                className={`${styles.link} ${styles.linkYellow}`}
              >
                <span className={styles.dot}></span>
                <span className={styles.linkText}>Contact</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} <a href="https://www.skillkraftz.com">SkillKraftz LLC</a></p>
      </footer>
    </div>
  )
}
