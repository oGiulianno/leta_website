
/*import Head from 'next/head'
import styles from '../styles/Home.module.css'
import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>
					LETA - PUC Goiás
				</title>
				<ul>
					<li>
						<Link href="/"><a>LETA</a></Link>
					</li>
				</ul>

				<meta content='LETA' name='description'/>

				<link href='/favicon.ico' rel='icon'/>
			</Head>
		</div>
	)
}

export default Home*/ 

import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>LETA</title>
          <meta property="og:title" content="LETA" />
        </Head>
        <div className="home-container1 hover14 column">
          <img
		  	//testando imagens
            src="https://vidacelular.com.br/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png"
            alt="image"
            className="home-image"
          />
          <img
            src="https://vidacelular.com.br/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png"
            alt="image"
            className="home-image1"
          />
          <img
            src="https://vidacelular.com.br/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png"
            alt="image"
            className="home-image2"
          />
        </div>
        <div className="home-container2">
          <button className="home-button button">Teste</button>
          <button className="home-button1 button">Teste</button>
          <button className="home-button2 button">Teste</button>
          <button className="home-button3 button">Teste</button>
          <button className="home-button4 button">Teste</button>
          <button className="home-button5 button">Teste</button>
          <button className="home-button6 button" onClick={event =>  window.location.href='/Contato'}>Contato</button>
        </div>
        <div className="home-container3">
          <img
            src="https://vidacelular.com.br/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png"
            alt="image"
            className="home-image3"
          />
        </div>
        <h1 className="home-text">LETA</h1>
        <span className="home-text1">
          Leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
          leta leta leta leta leta leta leta leta leta leta leta leta leta leta
        </span>
        <div className="home-container4">
          <span>@Rodapé</span>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container1 {
            width: 100%;
            height: 480px;
            display: flex;
            position: relative;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            justify-content: flex-start;
          }
          .home-image {
            flex: 1;
            width: 100px;
            align-self: stretch;
            object-fit: cover;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            border-top-left-radius: var(--dl-radius-radius-radius4);
          }
          .home-image1 {
            flex: 1;
            width: 100px;
            align-self: stretch;
            object-fit: cover;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            border-top-left-radius: var(--dl-radius-radius-radius2);
          }
          .home-image2 {
            flex: 1;
            width: 100px;
            align-self: stretch;
            object-fit: cover;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            border-top-left-radius: var(--dl-radius-radius-radius2);
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .home-button {
            flex: 1;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
          }
          .home-button1 {
            flex: 1;
            margin-right: var(--dl-space-space-halfunit);
          }
          .home-button2 {
            flex: 1;
            margin-right: var(--dl-space-space-halfunit);
          }
          .home-button3 {
            flex: 1;
            margin-right: var(--dl-space-space-halfunit);
          }
          .home-button4 {
            flex: 1;
            margin-right: var(--dl-space-space-halfunit);
          }
          .home-button5 {
            flex: 1;
            margin-right: var(--dl-space-space-halfunit);
          }
          .home-button6 {
            flex: 1;
            margin-right: var(--dl-space-space-halfunit);
          }
          .home-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-large);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-image3 {
            flex: 1;
            width: 100px;
            height: 100%;
            align-self: stretch;
            object-fit: cover;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
          }
          .home-text {
            margin-top: var(--dl-space-space-unit);
          }
          .home-text1 {
            margin-top: var(--dl-space-space-unit);
            text-align: justify;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default Home
