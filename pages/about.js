import Image from 'next/image';

import styles from '../styles/About.module.css';

export default function About(){
  return(
    <div className={styles.about}>
      <h1>Sobre o Projeto</h1>
      <p>Este projeto foi desenvolvido com o intuito de consolidar os conhecimentos adquiridos no curso de NextJs do professor Matheus Battisti.</p>
      <Image src="/images/charizard.png" alt="charizard" width={300} height={300} />
    </div>
  )
}