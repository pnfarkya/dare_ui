import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from '../src/home'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HomePage/>
    </div>
  )
}

export default Home
