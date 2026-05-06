import { useState, type FormEvent } from "react";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { Link } from "./components/Link/Link";
import styles from "./App.module.css";

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
    <line x1="2" y1="2" x2="22" y2="22" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

type Status = "idle" | "loading" | "success";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormError("");

    let valid = true;
    if (!email.trim()) {
      setEmailError("Email is required.");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!valid) return;

    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1200));

    // Simulate wrong credentials — enter "wrong" as the password to trigger
    if (password === "wrong") {
      setStatus("idle");
      setFormError("Incorrect email or password. Please try again.");
    } else {
      setStatus("success");
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>Sign in</h1>
          <p className={styles.subtitle}>Welcome back. Enter your details to continue.</p>
        </div>

        {status === "success" ? (
          <div className={styles.success}>
            <span className={styles.successIcon}><CheckIcon /></span>
            <p className={styles.successTitle}>You're signed in</p>
            <p className={styles.successText}>You've successfully authenticated.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {formError && (
              <div className={styles.formError} role="alert">{formError}</div>
            )}
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
              error={emailError || undefined}
            />
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              autoComplete="current-password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setPasswordError(""); }}
              error={passwordError || undefined}
              iconRight={
                <button
                  type="button"
                  className={styles.iconButton}
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              }
            />
            <div className={styles.actions}>
              <Button type="submit" fullWidth loading={status === "loading"}>
                {status === "loading" ? "Signing in…" : "Sign in"}
              </Button>
              <div className={styles.footer}>
                <Link href="#">Forgot password?</Link>
              </div>
            </div>
          </form>
        )}

        {status !== "success" && (
          <div className={styles.signup}>
            <span className={styles.signupText}>Don't have an account?</span>
            <Link href="#">Create one</Link>
          </div>
        )}
      </div>
    </div>
  );
}
