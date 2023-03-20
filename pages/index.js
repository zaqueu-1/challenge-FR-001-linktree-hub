import Head from 'next/head'
import MyLink from './components/mylink/MyLink'
import image from './public/images/image.jpg'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa'
import { AiOutlineGithub } from 'react-icons/ai'
import { RiFolderChartFill } from 'react-icons/ri'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Head>
        <title>Eduardo Zaqueu | Desenvolvedor Front-end</title>
        <meta name="description" content="Eduardo Zaqueu | Desenvolvedor Front-end" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <motion.div initial={{ opacity: 0, y:15 }} animate={{ opacity: 1, y:0, transition: { duration: 0.5 } }} className="profile">
          <Image src={image} alt="Eduardo Zaqueu" className='avatar'/>
          <h1>Eduardo Zaqueu</h1>
          <h2>Desenvolvedor Front-end</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y:25 }} animate={{ opacity: 1, y:0, transition: { duration: 1 } }} className="links-container">
          <MyLink 
            link="https://zaqueu.tech"
            title="Veja meu portfolio"
            icon={<RiFolderChartFill/>}
          />
          <MyLink 
            link="https://www.linkedin.com/in/zaqueu1/"
            title="Conecte-se comigo"
            icon={<FaLinkedin/>}
          />
          <MyLink 
            link="https://github.com/zaqueu-1"
            title="Acesse meus repositórios"
            icon={<AiOutlineGithub />}
          />
        </motion.div>

        <div className='footer'>
          <p>Feito por Eduardo Zaqueu como parte do <a href='https://github.com/JCDMeira/challenge-roadmap-index' target='_blank'>desafio React</a> de Jean Meira</p>
        </div>
      </main>
    </>
  )
}
