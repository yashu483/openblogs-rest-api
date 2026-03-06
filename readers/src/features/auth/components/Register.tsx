import style from "./styles/Register.module.css";
import { Link } from "react-router-dom";
import shineImg from "@/assets/images/star.png";

export const Register = () => {
  return (
    <div className={style.container}>
      <div className={style.shineImgWrapper}>
        <img
          src={shineImg}
          alt="An shining star image for aesthetic."
          aria-hidden="true"
        />
      </div>
      <h1 className={style.heading}>Create Account</h1>
      <p className={style.ctaText}>
        Join the amazing community of writers on OpenBlogs.
      </p>
      <form autoComplete="on" className={style.form}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" required />
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" name="fullName" id="fullName" required />
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
            autoCapitalize="new-password"
          />
        </div>

        <button type="submit">Create Account</button>
      </form>
      <p className={style.loginLink}>
        Already have an account? <Link to="/register">Sign in</Link>
      </p>
    </div>
  );
};
