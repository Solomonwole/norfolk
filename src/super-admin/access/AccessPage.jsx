import { useState } from "react";
import { AccessStyle, Form } from "./styled";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AccessPage() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleCode = (e) => {
    e.preventDefault();
    if (code === "1111") {
      navigate("/super");
      localStorage.setItem("super", "super");
    } else {
      toast.error("Access Denied!!");
    }
  };
  return (
    <AccessStyle>
      <Form onSubmit={handleCode}>
        <input
          type="password"
          placeholder="Enter access code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button type="submit">Continue</button>
      </Form>
    </AccessStyle>
  );
}

export default AccessPage;
