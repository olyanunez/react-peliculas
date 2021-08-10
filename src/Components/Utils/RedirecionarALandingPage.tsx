import { Redirect } from "react-router-dom";

export default function RedirecionarALandingPage(){

    return <Redirect to = {{pathname:'/'}}/>
}