import {ChangeEvent, FormEvent, useState } from "react";
import {MDBBtn, MDBInput} from "mdb-react-ui-kit";
import clientApi from "../api.helpers/client.api";

export default function LoginForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [result, setresult] = useState('Not login');
    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        console.log("handleSubmit")
        ev.preventDefault();
        clientApi.login(username,password);
    }
    return (
            <form onSubmit={handleSubmit}>
                <MDBInput id="username"  placeholder="Username" onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setUsername(event.target.value)
                } />
                <MDBInput type="password" id="password"  placeholder="Password" onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setPassword(event.target.value)
                } />
                <MDBBtn block type="submit">Login</MDBBtn>
                <div> {result}</div>
            </form>
       
    )

}