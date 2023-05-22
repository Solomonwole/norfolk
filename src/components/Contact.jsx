import { AiOutlineClose } from "react-icons/ai";
import {
  Card,
  CloseIcon,
  Content,
  FormContainer,
  Input,
  Label,
  Layout,
  Textarea,
  Title,
} from "../admin/layout/TransferMoney";
import { useState } from "react";
import { Button } from "../GlobalStyle";
import Mail from "../auth/assets/mail.svg";
import PropTypes from "prop-types";

function Contact({ cancel }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(true);
  };
  return (
    <>
      {!sent ? (
        <Layout>
          <Card>
            <Content>
              <Title>Contact Us</Title>
              <CloseIcon onClick={cancel}>
                <AiOutlineClose />
              </CloseIcon>
            </Content>
            <br />

            <FormContainer>
              <form onSubmit={handleForm}>
                <Label>Subject</Label>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Investment Consultation"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
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
                <Label>Phone Number</Label>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="+507 123-4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={loading}
                  required
                />
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
                {/* {invalid && (
                  <FormError>
                    <span>Invalid account number</span>
                  </FormError>
                )} */}

                <Label>Description</Label>
                <Textarea
                  type="text"
                  name="message"
                  placeholder="Enter a description"
                  rows="7"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={loading}
                  required
                />
                <Button type="submit">
                  {!loading ? "Submit" : <div className="loader"></div>}
                </Button>
              </form>
            </FormContainer>
          </Card>
        </Layout>
      ) : (
        <Layout>
          <Card>
            <Content>
              <Title>Submitted</Title>
              <CloseIcon onClick={cancel}>
                <AiOutlineClose />
              </CloseIcon>
            </Content>
            <img src={Mail} alt="" />
            <Button onClick={cancel}>Go to Login</Button>
          </Card>
        </Layout>
      )}
    </>
  );
}

Contact.propTypes = {
  cancel: PropTypes.func.isRequired,
};

export default Contact;
