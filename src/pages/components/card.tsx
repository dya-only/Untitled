import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'

import Logo from '/src/assets/logo.png'

export default function Card(props: any) {
  return (
    <div className="card m-12 drop-shadow-xl transition duration-300 hover:scale-105 active:scale-100 cursor-pointer">
      <Image className="thumb w-[300px] h-[160px] object-cover rounded-t-xl" src={Logo} alt={''} />
      <div className="pl-4 pt-2 bg-zinc-900 p-4 rounded-b-xl">
        <div className="title text-white font-bold text-2xl">{ props?.title }</div>
        <div className="sub text-zinc-400">{ props?.sub }</div>
      </div>
    </div>
  )
}