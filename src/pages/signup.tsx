import React from 'react'
import SignUp from '../../components/login/SignUp'
import Background from '../../components/login/LoginBackground'



type Props = {}

const signup = (props: Props) => {
  return (
    <div className="h-screen w-screen relative overflow-hidden">

      <Background/>
      <SignUp/>
    </div>
  )
}

export default signup