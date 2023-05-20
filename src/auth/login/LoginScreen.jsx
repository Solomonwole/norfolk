import {
  AuthScreen,
  Checkbox,
  ForgotPasswordLink,
  FormContainer,
  Input,
  Label,
  PasswordContainer,
  PasswordInput,
  RememberMeContainer,
  RememberMeText,
  TogglePasswordButton,
} from "./styled";
import Image from "../assets/image.jpg";
import { AuthHOne, Button, FormError } from "../../GlobalStyle";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth, db } from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const user = userCredential.user;

      const userEmail = user.email;
      localStorage.setItem("Email", userEmail);
      const displayName = user.displayName;
      localStorage.setItem("Name", displayName);
      const userUID = user.uid;
      localStorage.setItem("UID", userUID);
      const lastSignin = user.metadata.lastSignInTime;
      localStorage.setItem("lastSignin", lastSignin);

      const docRef = doc(db, "users", auth.currentUser.email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const data = docSnap.data();
        localStorage.setItem("Account", data.account);
        localStorage.setItem("Balance", data.balance);
        localStorage.setItem("Status", data.status);
        localStorage.setItem("Password", data.password);
        localStorage.setItem("Bank", data.bank);
        localStorage.setItem("AcctNo", data.acctno);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
      localStorage.setItem("isLogged", "isLogged");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthScreen>
      <div className="left">
        <img src={Image} alt="" />
      </div>

      <div className="right">
        <div className="head">
          <AuthHOne>Welcome Back!</AuthHOne>
        </div>

        <FormContainer>
          <form onSubmit={handleLogin}>
            <Label>Email Address</Label>
            <Input
              type="email"
              name="email"
              placeholder="johndoe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
            />
            {error && (
              <FormError>
                <span>Invalid email or password</span>
              </FormError>
            )}

            <Label>Password</Label>
            <PasswordContainer>
              <PasswordInput
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="*******"
                value={password}
                disabled={loading}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <TogglePasswordButton
                type="button"
                onClick={handleTogglePasswordVisibility}
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </TogglePasswordButton>
            </PasswordContainer>
            {error && (
              <FormError>
                <span>Invalid email or password</span>
              </FormError>
            )}

            <ForgotPasswordLink><Link to="/forgot">Forgot Password?</Link></ForgotPasswordLink>

            <RememberMeContainer>
              <Checkbox
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
                disabled={loading}
              />
              <RememberMeText>Keep me logged in</RememberMeText>
            </RememberMeContainer>

            <Button type="submit">
              {loading ? <div className="loader"></div> : "Login"}
            </Button>
          </form>
        </FormContainer>

        <p className="acct">
          Don’t have an account? <Link to="/sign-up">Sign Up</Link>
        </p>
      </div>
    </AuthScreen>
  );
}

export default LoginScreen;
