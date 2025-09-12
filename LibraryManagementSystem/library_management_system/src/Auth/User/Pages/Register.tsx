import Card from "../../../Shared/Component/Common/Card"


function Register() {
  return (
    <>
    <Card title="User Register">
      <form>
        <fieldset>
          <legend>Form</legend>
          <label>User Name : </label>
          <input type="Text"  placeholder="Name"  required/><br></br>
          <label>User Phone : </label>
          <input type="Phone"  placeholder="Phone" required /><br></br>
          <label>User Email : </label>
          <input type="Email"  placeholder="Email"  required/><br></br>
          <label>Mamber Type</label>
          <select>
            <option>Standard</option>
            <option>Premium</option>
          </select><br></br>
          <label>User Password : </label>
          <input type="Password"  placeholder="Password" required /><br></br>
          <button type="submit">Register</button>
        </fieldset>
      </form>
    </Card>
    </>
  )
}

export default Register