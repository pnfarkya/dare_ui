import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../src/Components/layout'
import styles from '../styles/Home.module.css'
import SecondaryMarketsHome from '../src/Components/secondary_markets/home'

const SecondaryMarkets: NextPage = () => {
  return (
    <div className={styles.container}>
      <SecondaryMarketsHome />
    </div>
  )
}

export default SecondaryMarkets
