import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaPlay, FaTrophy, FaUsers, FaBroadcastTower } from 'react-icons/fa'
import { GiSoccerBall } from 'react-icons/gi'
import GlowButton from '../components/GlowButton'
import VideoCard from '../components/VideoCard'
import { competicoes } from '../data/competicoes'
import styles from './Home.module.css'

const WHATSAPP_NUMBER = '556999517161'
const WHATSAPP_MSG = encodeURIComponent('Olá! Gostaria de saber mais sobre as transmissões da TopNet.')

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
}

const galeria = [
  { titulo: 'Final Copa da Liga Regional 2025', url: 'https://www.youtube.com/watch?v=OkgqTkJ0Br8' },
  { titulo: 'Copa RS - Semifinal', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { titulo: 'Liga Gaúcha - Grande Final', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { titulo: 'Clássico Gaúcho 2023', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroNoise} />
        <motion.div
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src="/logo topnet transmissão.png"
            alt="TopNet Transmissões"
            className={styles.heroLogo}
            variants={fadeUp}
            custom={1}
          />

          <motion.p className={styles.heroDesc} variants={fadeUp} custom={2}>
            Levamos a emoção do futebol para todo o Brasil com transmissões
            profissionais, cobertura completa e qualidade de ponta.
          </motion.p>

          <motion.div className={styles.heroBtns} variants={fadeUp} custom={3}>
            <GlowButton href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}>
              <FaWhatsapp size={18} />
              Fale conosco
            </GlowButton>
            <GlowButton variant="outline" onClick={() => {
              document.getElementById('competicoes')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Ver competições
            </GlowButton>
          </motion.div>
        </motion.div>

        <div className={styles.heroScroll}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className={styles.scrollDot}
          />
        </div>
      </section>

      {/* SOBRE NÓS */}
      <section id="sobre" className={styles.sobre}>
        <motion.div
          className={styles.sobreGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeUp} custom={0}>
            <span className={styles.sectionLabel}>Quem somos</span>
            <h2>Sobre nós</h2>
            <p>
              A TopNet Transmissões nasceu da paixão pelo futebol. Somos uma
              equipe especializada em transmissões esportivas ao vivo, com foco em
              qualidade de imagem, narração envolvente e cobertura completa das
              principais competições do estado de Rondônia.
            </p>
            <p>
              Com anos de experiência, já transmitimos dezenas de jogos, levando a
              emoção das arquibancadas para telas de todo o Brasil.
            </p>
          </motion.div>

          <motion.div className={styles.sobreCards} variants={fadeUp} custom={1}>
            <div className={styles.card}>
              <GiSoccerBall size={28} />
              <strong>+450</strong>
              <span>Jogos transmitidos</span>
            </div>
            <div className={styles.card}>
              <FaBroadcastTower size={28} />
              <strong>+8</strong>
              <span>Competições cobertas</span>
            </div>
            <div className={styles.card}>
              <FaUsers size={28} />
              <strong>+800k</strong>
              <span>Espectadores únicos</span>
            </div>
            <div className={styles.card}>
              <FaPlay size={28} />
              <strong>HD</strong>
              <span>Qualidade de transmissão</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* COMPETIÇÕES */}
      <section id="competicoes" className={styles.competicoes}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span className={styles.sectionLabel} variants={fadeUp} custom={0}>
            Nosso portfólio
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1}>Competições transmitidas</motion.h2>
          <motion.p className={styles.sectionDesc} variants={fadeUp} custom={2}>
            Clique em uma competição para ver detalhes e trechos das transmissões
          </motion.p>

          <div className={styles.compsGrid}>
            {competicoes.map((comp, i) => (
              <motion.div
                key={comp.id}
                className={styles.compCard}
                variants={fadeUp}
                custom={i + 3}
                onClick={() => navigate(`/competicao/${comp.id}`)}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  '--c1': comp.cor1,
                  '--c2': comp.cor2,
                } as React.CSSProperties}
              >
                <div className={styles.compGlow} />
                <FaTrophy size={32} className={styles.compIcon} />
                <h3>{comp.nome}</h3>
                <p>{comp.edicoes}</p>
                <span className={styles.compCta}>Ver transmissões →</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className={styles.galeria}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span className={styles.sectionLabel} variants={fadeUp} custom={0}>
            Nosso trabalho
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1}>Jogos históricos</motion.h2>
          <motion.p className={styles.sectionDesc} variants={fadeUp} custom={2}>
            Confira alguns jogos que marcaram a história das nossas transmissões
          </motion.p>

          <div className={styles.galeriaGrid}>
            {galeria.map((item, i) => (
              <motion.div key={i} variants={fadeUp} custom={i + 3}>
                <VideoCard url={item.url} titulo={item.titulo} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA WHATSAPP */}
      <section className={styles.cta}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2 variants={fadeUp} custom={0}>
            Quer transmitir sua competição?
          </motion.h2>
          <motion.p variants={fadeUp} custom={1}>
            Entre em contato pelo WhatsApp e tire todas as suas dúvidas com nossa equipe.
          </motion.p>
          <motion.div variants={fadeUp} custom={2}>
            <GlowButton href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}>
              <FaWhatsapp size={20} />
              Chamar no WhatsApp
            </GlowButton>
          </motion.div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <FaBroadcastTower size={18} />
        <span>TopNet Transmissões © {new Date().getFullYear()}</span>
      </footer>
    </div>
  )
}
