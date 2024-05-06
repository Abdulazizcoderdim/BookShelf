import RegisterForm from "./RegisterForm";
import './RegisterPage.css'

const RegisterPage: React.FC = () => {

  return (
    <div className="register">
      <div className="register-form">
       <h1>Register</h1>
       <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;