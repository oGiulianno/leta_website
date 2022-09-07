import Head from 'next/head'
import styles from '../styles/Home.module.css'
import type { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>
					LETA - PUC Goiás
				</title>

				<meta content='LETA' name='description'/>

				<link href='/favicon.ico' rel='icon'/>
			</Head>
		</div>
	)
}

export default Home