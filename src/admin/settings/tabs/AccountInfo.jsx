import { styled } from "styled-components";
import { Button } from "../../../GlobalStyle";
import { FormContainer, Input, Label } from "../../layout/TransferMoney";
import { Box, Grid } from "../../support/styled";


const getInitials = (name) => {
    const nameArray = name.split(" ");
    const initials = nameArray
      .map((n) => n[0])
      .join("")
      .toUpperCase();
    return initials;
  };

function AccountInfo() {
  const name = localStorage.getItem("Name");
  const email = localStorage.getItem("Email");
  const [firstName, lastName] = name.split(" ");
  const initials = getInitials(name);

  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <Grid>
      <Box>
        <FormContainer>
          <form onSubmit={handleForm}>
            <Label>First Name</Label>
            <Input type="text" name="firstName" value={firstName} />
            <Label>Last Name</Label>
            <Input type="text" name="lastName" value={lastName} />
            <Label>Email Address</Label>
            <Input type="email" name="email" value={email} />
            <Button type="submit">Save</Button>
          </form>
        </FormContainer>{" "}
      </Box>
      
      <Box>
      <AvatarWrapper>{initials}</AvatarWrapper>
      </Box>
    </Grid>
  );
}

export default AccountInfo;


const AvatarWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #6e47ff;
  border: 2px solid #afadff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 200%;
  font-weight: bold;
  color: #fff;
  margin: auto;
`;