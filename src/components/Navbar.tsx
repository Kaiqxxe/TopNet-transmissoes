import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './Navbar.module.css'

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  function scrollTo(id: string) {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }

  return (
    <motion.nav
      className={styles.nav}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className={styles.logo}>
        <img src="/logo topnet transmissão.png" alt="TopNet Transmissões" className={styles.logoImg} />
      </Link>

      <ul className={styles.links}>
        <li>
          <Link
            to="/"
            className={location.pathname === '/' ? styles.active : ''}
          >
            Início
          </Link>
        </li>
        <li>
          <a onClick={() => scrollTo('sobre')} style={{ cursor: 'pointer' }}>Sobre nós</a>
        </li>
        <li>
          <a onClick={() => scrollTo('competicoes')} style={{ cursor: 'pointer' }}>Competições</a>
        </li>
        <li>
          <a onClick={() => scrollTo('galeria')} style={{ cursor: 'pointer' }}>Galeria</a>
        </li>
      </ul>
    </motion.nav>
  )
}
