import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signin(){
  const usernameRef= useRef<HTMLInputElement>();
  const passwordRef=useRef<HTMLInputElement>();
  const navigate=useNavigate();

   async function signin(){
        const username= usernameRef.current?.value;
        const password=passwordRef.current?.value;
       const response= await axios.post(BACKEND_URL+"/api/v1/signin",{
                username,
                password
            
        })
        const jwt=response.data.token;
        localStorage.setItem("token",jwt);
        navigate("/dashboard");
      }
return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
    <div className="bg-white rounded-xl p-8 border min-w-48 ">
        <Input reference={usernameRef} placeholder="username" ></Input>
        <Input reference={passwordRef} placeholder="password"></Input>
        <div className="pt-4 flex justify-center" >
          <Button  onClick={signin} loading={false} text="sign in" varient="primary" size="md"></Button>
        </div>
       
    </div>

</div>


}

