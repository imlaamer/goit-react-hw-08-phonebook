import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux';
import { toast } from 'react-toastify';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleRegisterSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;
    const formData = {
      name,
      email,
      password,
    };
    dispatch(registerUser(formData))
      .unwrap()
      .catch(() =>
        toast.error('Something went wrong. Please try again later!')
      );
  };
  return (
    <div className={css.registerSection}>
      <div className={css.registerContainer}>
        <h1>Sign up for free!</h1>
        <form className={css.registerForm} onSubmit={handleRegisterSubmit}>
          <div className={css.registerFormWrapper}>
            <label htmlFor="name" className={css.registerLabel}>
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              minLength={2}
              required
              className={css.registerInput}
              autoFocus
              aria-label="Name"
              title="Name must contain at least 2 symbols"
            />
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
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
