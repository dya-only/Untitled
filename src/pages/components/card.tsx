import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

export default function Home({ data }: any) {
  return (
    <main className={styles.main}>
      <div className={styles.title}>{ data }</div>
    </main>
  )
}

export async function getServerSideProps() {

  const res = await fetch('http://localhost:3000/api/hello', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "Card" })
  })
  const data = await res.json()

  return { props: { data } }
}