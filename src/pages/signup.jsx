import React from "react";
import SignUp from "../../components/login/SignUp";
import Background from "../../components/login/LoginBackground";
import Head from "next/head";
import Favicon from "react-favicon";



const signup = (props) => {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <Head>
        <title>Signup to Decision-GPT</title>
        <meta
          name="robots"
          content="decision gpt,Decision,gpt,guidance,decision guidance,ai guidance,chatgpt,AI project"
        />
      </Head>
      <Favicon
        url={"https://cdn-icons-png.flaticon.com/512/3310/3310122.png"}
      />
      <Background />
      <SignUp />
    </div>
  );
};

export default signup;
