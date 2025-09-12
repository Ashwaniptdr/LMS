
import Card from '../../../Shared/Component/Common/Card'

function Login() {
  return (
   <>
      <Card title={"Employee Login "} >
   
       <form>
           <fieldset>
             <legend>Form</legend>
             <label>Employee Email : </label>
             <input type="Email"  placeholder="Email"  required/><br></br>
             <label>Employee Password : </label>
             <input type="Password"  placeholder="Password" required /><br></br>
             <button type="submit">Login</button>
           </fieldset>
         </form>
      </Card>
      </>
  )
}

export default Login