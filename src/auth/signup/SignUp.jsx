import { Link, useNavigate } from "react-router-dom";
import { AuthHOne, Button } from "../../GlobalStyle";
import {
  AuthScreen,
  FormContainer,
  Input,
  Label,
  PasswordContainer,
  PasswordInput,
  TogglePasswordButton,
} from "../login/styled";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebaseConfig";
import { toast } from "react-toastify";
import Image from "../assets/image.jpg";

function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          updateProfile(auth.currentUser, { displayName: name });
          setDoc(doc(db, "users", userCredential.user.email), {
            name: name,
            email: email,
            password: password,
            balance: 0,
            account: "",
            acctno: "",
            bank: "",
            earned: 0,
            invested: 0,
            mode: 0,
            status: "inactive",
            transactions: [],
          });
          auth.useDeviceLanguage();
          setLoading(false);
          toast.success("Account Successfully Created")
          navigate("/login");
        }
      );
    } catch (error) {
      toast.error(error.message);
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
          <AuthHOne>Create an Account</AuthHOne>
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
            <Label>Full Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              required
            />

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
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </TogglePasswordButton>
            </PasswordContainer>

            <Button type="submit">
              {loading ? <div className="loader"></div> : "Register"}
            </Button>
          </form>
        </FormContainer>

        <p className="acct">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </AuthScreen>
  );
}

export default SignUp;
