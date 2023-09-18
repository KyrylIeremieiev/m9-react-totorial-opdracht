import Image from 'next/image'
import styles from './page.module.css'
import Js from './img/dum.jpeg'

export default function Home() {
  return (
    <section>
    <header className='header'>Big old header</header>
    <main className='main'>
      <article className='card'>
        <h2 className='card__title'>Webpack</h2>
        <Image src={ Js } className='card__image'></Image>
        <p className='card__text'>Webpack is a widely-used open-source JavaScript module bundler and build tool. It's primarily designed for bundling and optimizing JavaScript, but it can handle various types of assets and resources in modern web development</p>
      </article>
      <article className='card'>
        <h2 className='card__title'>Babel</h2>
        <Image src={ Js } className='card__image'></Image>
        <p className='card__text'>Babel is a widely-used open-source JavaScript compiler that allows developers to write code using the latest ECMAScript (JavaScript) features and syntax, even if those features are not yet supported by all web browsers.</p>
      </article>
      <article className='card'>
        <h2 className='card__title'>NPM</h2>
        <Image src={ Js } className='card__image'></Image>
        <p className='card__text'>npm, which stands for Node Package Manager, is the default package manager for Node.js. It is a command-line tool and an online repository of open-source JavaScript packages and modules.</p>
      </article>
      <article className='card'>
        <h2 className='card__title'>JSX</h2>
        <Image src={ Js } className='card__image'></Image>
        <p className='card__text'>SX, which stands for JavaScript XML, is a syntax extension used in React, a popular JavaScript library for building user interfaces.</p>
      </article>
    </main>
    </section>
  )
}
