import { Link } from "react-router-dom";


export default function HomePage() {
  return (
    <>
    <nav>
      <Link to={"/auth/user/Register"}>Register</Link>
      <Link to={"/auth/user/Login"}>Login</Link>
      <Link to={"/auth/employee/Register"}>Register</Link>
      <Link to={"/auth/employee/Login"}>Login</Link>
    </nav>
     
     
    </>
  )
}
