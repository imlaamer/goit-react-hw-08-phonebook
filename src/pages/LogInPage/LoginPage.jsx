import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux';
import { toast } from 'react-toastify';
import css from './LoginPage.module.css';

const LoginPage = ({ children }) => {
  const dispatch = useDispatch();
  const handleLoginSubmit = e => {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;
    const formData = {
      email,
      password,
    };
    dispatch(loginUser(formData))
      .unwrap()
      .catch(() =>
        toast.error(
          'Login failed! Please recheck the email and password and try again.'
        )
      );
  };
  return (
    <div className={css.registerSection}>
      <div className={css.registerContainer}>
        <h1>Login</h1>

        <form className={css.registerForm} onSubmit={handleLoginSubmit}>
          <div className={css.registerFormWrapper}>
            <label htmlFor="email" className={css.registerLabel}>
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
              className={css.registerInput}
              autoFocus
              aria-label="Email"
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              title="Email can contain lowercase letters, numbers, and special characters such as '.', '_', '%', '+', or '-', followed by '@', then a domain name consisting of lowercase letters, numbers, or '-', followed by '.', and ending with a valid top-level domain (e.g., .com, .org, .net) of at least two characters"
            />
            <label htmlFor="password" className={css.registerLabel}>
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              minLength={7}
              required
              className={css.registerInput}
              aria-label="Password"
              title="Password must contain at least 7 symbols"
            />
            <button type="submit" className={css.registerBtn}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
