import {MDBContainer} from "mdb-react-ui-kit";
import LoginForm from "../components/LoginForm";
import { useRouter } from 'next/router'

export default function Login(){
    const router = useRouter()
    const onSuccess= ()=>{
        console.log("onSuccess to Login")
        router.push(`/`)
    }

    return (
        <MDBContainer>
            <LoginForm onSuccessHandler={onSuccess} />
        </MDBContainer>
    )
}