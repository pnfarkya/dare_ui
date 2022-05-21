import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../src/Components/layout'
import styles from '../../styles/Home.module.css'
import CollectionDetailsView from '../../src/Components/secondaryMarkets/collectionDetailsView'
const CollectionView: NextPage = () => {
    return (
        <div className={styles.container}>
            <CollectionDetailsView />
        </div>
    )
}

export default CollectionView