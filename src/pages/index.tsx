import Heading from "../../components/Heading"
import Main from "../../components/Main"
import Favicon from "react-favicon";
import Head from 'next/head';
import { auth } from "../../components/login/middleware/firebase";
import { useEffect,useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";



export default function Home() {
  const [value,setValue] = useState("");
  const router = useRouter();
  const [user,setUser] = useState(null)



  useEffect(()=>{
   onAuthStateChanged(auth,(User)=>{

          if(User){
            setUser(user)
            console.log(User.displayName);
             
          }

          else{
            console.log("hello");
            
            router.push("/login")
          }
    })
  },[])
    
 
  return (
    <div className="h-screen w-screen bg-background overflow-hidden ">
      <Head>
      <title>Decision-GPT : Signup</title>
      <meta name="robots" content="decision gpt,Decision,gpt,guidance,decision guidance,ai guidance,chatgpt,AI project" />
      </Head>
      <Favicon url={"https://cdn-icons-png.flaticon.com/512/3310/3310122.png"} />
      <div className="scale-95 sm:scale-100">
        {/* <LoginMain/> */}
      
      <Heading/> 
      <Main/>
      </div>
      
    </div>
  )
}
