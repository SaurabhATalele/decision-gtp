import React from 'react'
import { Login } from '../../components/login/Login'
import Background from '../../components/login/LoginBackground'
import Head from 'next/head'
import Favicon from 'react-favicon'


const login = (props) => {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
     <Head>
      <title>Login to Decision-GPT</title>
      <meta name="robots" content="decision gpt,Decision,gpt,guidance,decision guidance,ai guidance,chatgpt,AI project" />
      </Head>
      <Favicon url={"https://cdn-icons-png.flaticon.com/512/3310/3310122.png"} />
      <Background/>
      <Login/>
    </div>
    
  )
}

export default login