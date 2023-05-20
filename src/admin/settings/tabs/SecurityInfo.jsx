import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  PasswordContainer,
  PasswordInput,
  TogglePasswordButton,
} from "../../../auth/login/styled";
import { FormContainer, Label } from "../../layout/TransferMoney";
import { Box, Grid } from "../../support/styled";
import { useState } from "react";
import { Button, FormError } from "../../../GlobalStyle";
import { auth, db } from "../../../firebase/firebaseConfig";
import { updatePassword } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SecurityInfo() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showNPassword, setShowNPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const currentPassword = localStorage.getItem("Password");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [match, setMatch] = useState(true);

  const handleForm = async (e) => {
    e.preventDefault();

    if (password === currentPassword) {
      setInvalid(false);

      if (confirmPassword === newPassword) {
        setMatch(true);
        setLoading(true);
        try {
          const user = auth.currentUser;
          await updatePassword(user, newPassword);
          const userDocRef = doc(db, "users", user.email);
          await updateDoc(userDocRef, { password: newPassword });
          toast.success("Password changed");
          setLoading(false);
          auth.signOut();
          navigate("/login");
        } catch (error) {
          setLoading(false);
          toast.error(error.message);
          console.log(error);
        }
      } else {
        setMatch(false);
      }
    } else {
      setInvalid(true);
    }
  };
  return (
    <Grid>
      <Box>
        <FormContainer>
          <form onSubmit={handleForm}>
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
            {invalid && (
              <FormError>
                <span>Invalid password</span>
              </FormError>
            )}

            <Label>New Password</Label>
            <PasswordContainer>
              <PasswordInput
                type={showNPassword ? "text" : "password"}
                name="password"
                placeholder="*******"
                value={newPassword}
                disabled={loading}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <TogglePasswordButton
                type="button"
                onClick={() => setShowNPassword(!showNPassword)}
              >
                {showNPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </TogglePasswordButton>
            </PasswordContainer>

            <Label>Confirm New Password</Label>
            <PasswordContainer>
              <PasswordInput
                type={showCPassword ? "text" : "password"}
                name="password"
                placeholder="*******"
                value={confirmPassword}
                disabled={loading}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <TogglePasswordButton
                type="button"
                onClick={() => setShowCPassword(!showCPassword)}
              >
                {showCPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </TogglePasswordButton>
            </PasswordContainer>
            {!match && (
              <FormError>
                <span>Password does not match</span>
              </FormError>
            )}
            <Button type="submit">
              {!loading ? "Save" : <div className="loader"></div>}
            </Button>
          </form>
        </FormContainer>
      </Box>
      <Box blank></Box>
    </Grid>
  );
}

export default SecurityInfo;
