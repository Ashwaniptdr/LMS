import Card from "../../../Shared/Component/Common/Card"


function Login() {
  return (
  <>
   <Card title={"User Login"} >

    <form>
        <fieldset>
          <legend>Form</legend>
          <label>User Email : </label>
          <input type="Email"  placeholder="Email"  required/><br></br>
          <label>User Password : </label>
          <input type="Password"  placeholder="Password" required /><br></br>
          <button type="submit">Login </button>
        </fieldset>
      </form>
   </Card>
   </>
  )
}

export default Login