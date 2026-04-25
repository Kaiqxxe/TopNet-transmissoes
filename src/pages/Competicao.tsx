import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaWhatsapp, FaTrophy, FaCalendar, FaUsers } from 'react-icons/fa'
import { competicoes } from '../data/competicoes'
import GlowButton from '../components/GlowButton'
import VideoCard from '../components/VideoCard'
import styles from './Competicao.module.css'

const WHATSAPP_NUMBER = '5569999517161'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
}

export default function Competicao() {
  const { id } = useParams()
  const navigate = useNavigate()
  const comp = competicoes.find((c) => c.id === id)

  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [id])

  if (!comp) {
    return (
      <div className={styles.notFound}>
        <p>Competição não encontrada.</p>
        <button onClick={() => navigate('/')}>Voltar</button>
      </div>
    )
  }

  const msg = encodeURIComponent(
    `Olá! Tenho interesse em saber mais sobre a transmissão do ${comp.nome}.`
  )

  return (
    <motion.div
      className={styles.page}
      style={{ '--c1': comp.cor1, '--c2': comp.cor2 } as React.CSSProperties}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* HERO DA COMPETIÇÃO */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <motion.button
            className={styles.back}
            onClick={() => navigate('/')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <FaArrowLeft size={14} />
            Voltar
          </motion.button>

          <motion.div
            initial="hidden"
            animate="visible"
          >
            <motion.div className={styles.badge} variants={fadeUp} custom={0}>
              <FaTrophy size={13} />
              Competição transmitida
            </motion.div>

            <motion.h1 variants={fadeUp} custom={1}>{comp.nome}</motion.h1>
            <motion.p className={styles.desc} variants={fadeUp} custom={2}>
              {comp.descricao}
            </motion.p>

            <motion.div className={styles.meta} variants={fadeUp} custom={3}>
              <span><FaCalendar size={14} /> Edições: {comp.edicoes}</span>
              <span><FaUsers size={14} /> {comp.times}</span>
            </motion.div>

            <motion.div variants={fadeUp} custom={4}>
              <GlowButton href={`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`}>
                <FaWhatsapp size={18} />
                Tirar dúvidas no WhatsApp
              </GlowButton>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* LIVES */}
      <div className={styles.lives}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={fadeUp} custom={0}>Trechos das transmissões</motion.h2>
          <motion.p className={styles.livesDesc} variants={fadeUp} custom={1}>
            Confira alguns momentos das nossas lives do {comp.nome}
          </motion.p>

          <div className={styles.livesGrid}>
            {comp.lives.map((live, i) => (
              <motion.div key={i} variants={fadeUp} custom={i + 2}>
                <VideoCard url={live.url} titulo={live.titulo} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2 variants={fadeUp} custom={0}>
            Quer transmitir seu Campeonato ou evento esportivo?
          </motion.h2>
          <motion.p variants={fadeUp} custom={1}>
            Entre em contato e vamos conversar sobre como podemos cobrir sua competição.
          </motion.p>
          <motion.div variants={fadeUp} custom={2}>
            <GlowButton href={`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`}>
              <FaWhatsapp size={18} />
              Falar com a equipe
            </GlowButton>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
