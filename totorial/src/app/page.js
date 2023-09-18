import Image from 'next/image'
import styles from './page.module.css'
import Js from './img/dum.jpeg'

export default function Home() {
  return (
    <main className='main'>
      <article className='card'>
        <h2 className='card__title'>Webpack</h2>
        <Image src={ Js } className='card__image'></Image>
        <p className='card__text'>Webpack is a widely-used open-source JavaScript module bundler and build tool. It's primarily designed for bundling and optimizing JavaScript, but it can handle various types of assets and resources in modern web development</p>
      </article>
    </main>
  )
}
