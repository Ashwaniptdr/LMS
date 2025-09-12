
import Card from '../../../Shared/Component/Common/Card'

function Register() {
  return (
    <>
        <Card title=" Employee Register">
          <form>
            <fieldset>
              <legend>Form</legend>
              <label>Employee Name : </label>
              <input type="Text"  placeholder="Name"  required/><br></br>
              <label>Employee Phone : </label>
              <input type="Phone"  placeholder="Phone" required /><br></br>
              <label>Employee Email : </label>
              <input type="Email"  placeholder="Email"  required/><br></br>
              <label>Employee Password : </label>
              <input type="Password"  placeholder="Password" required /><br></br>
              <button type="submit">Register</button>
            </fieldset>
          </form>
        </Card>
        </>
  )
}

export default Register