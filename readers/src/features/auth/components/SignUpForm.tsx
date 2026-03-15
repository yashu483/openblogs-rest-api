import style from "./styles/SignUpForm.module.css";
import { useRegister } from "../hooks/useRegister";

export const SignUpForm = () => {
  const { handleSubmit } = useRegister();
  return (
    <form autoComplete="on" className={style.form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" required />
      </div>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          required
          autoComplete="name"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          autoComplete="new-password"
        />
      </div>
      <div>
        <label htmlFor="confirmPass">Confirm Password:</label>
        <input
          type="password"
          required
          id="confirmPass"
          name="confirmPass"
          autoComplete="new-password"
        />
      </div>

      <button type="submit">Create Account</button>
    </form>
  );
};
