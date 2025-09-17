import { useNavigate } from "react-router-dom";
import './HomePage.css'

export default function HomePage() {
  const navigate = useNavigate();

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    if (value) navigate(value);
  }

  return (
    <>
      <nav className="LinkClass">
        <select onChange={handleSelect} defaultValue="">
          <option value="" disabled>
            Select Role
          </option>
          <option value="/auth/user/Login">User</option>
          <option value="/auth/employee/Login">Employee</option>
        </select>
      </nav>

      <div className="page-content">
        <h1>Welcome to The Oxford Library</h1>
        <p>
          Learn, grow, and manage your journey with us.  
          Explore our resources and connect with opportunities.
        </p>
        
      </div>
    </>
  );
}
