import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DARE</title>
        <meta name="description" content="Dare" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to DARE LOGIN
        </h1>
      </main>
    </div>
  )
}

export default Login
