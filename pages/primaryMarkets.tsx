import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../src/Components/layout'
import styles from '../styles/Home.module.css'
import PrimaryMarketsHome from '../src/Components/primary_markets/home'

const PrimaryMarkets : NextPage = () => {
  return (
    <div className={styles.container}>      
      <PrimaryMarketsHome/>
    </div>
  )
}

export default PrimaryMarkets
