import { useEffect, useRef, useState } from "react";
import { AuthHTwo, Button } from "../../GlobalStyle";
import { Welcome } from "../dashboard/styled";
import AdminDashboardLayout from "../layout/AdminDashboardLayout";
import { Box, Grid } from "./styled";
import { FormContainer, Input, Label, Textarea } from "../layout/TransferMoney";
import { IoMailUnread } from "react-icons/io5";
import { BsFillPhoneFill, BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Support() {
  const [loading, setloading] = useState(false);
  const [subject, setSubject] = useState("");
  const [fname, setFname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleForm = async (e) => {
    e.preventDefault();
    setloading(true);

      emailjs
      .sendForm(
        "service_4i15jjc",
        "template_bvuebel",
        form.current,
        "64NheqXQ8hgVNRlhy"
      )
      .then((response) => {
        setLoading(false);
        toast.success("Message Sent Successfully");
        setSubject("");
       setFname("");
       setPhone("");
       setEmail("");
       setMessage("");
      })
      .catch((error) => {
        setLoading(false);
        alert(error.message);
      });
  };
  return (
    <AdminDashboardLayout>
      <Welcome>
        <AuthHTwo>Help & Support</AuthHTwo>
      </Welcome>

      <Grid>
        <Box>
          <FormContainer>
            <form onSubmit={handleForm} ref={form}>
              <Label>Subject</Label>
              <Input
                type="text"
                name="subject"
                placeholder="johndoe@example.com"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                disabled={loading}
                required
              />
              <Label>Full Name</Label>
              <Input
                type="text"
                name="name"
                placeholder="johndoe@example.com"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                disabled={loading}
                required
              />
              <Label>Phone Number</Label>
              <Input
                type="tel"
                name="phone"
                placeholder="johndoe@example.com"
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
              <Label>Description</Label>
              <Textarea
                type="text"
                name="message"
                placeholder="johndoe@example.com"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={loading}
                required
              />
              <Button>
                {!loading ? "Submit" : <div className="loader"></div>}
              </Button>
            </form>
          </FormContainer>
        </Box>

        <Box>
          <div className="contact">
            <a
              href="mailto:info@supportnorfolkig.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMailUnread className="icon" />
              &nbsp; info@supportnorfolkig.com
            </a>
            <a href="#">
              <BsFillPhoneFill className="icon" /> &nbsp;+507 123-4567
            </a>
          </div>
          <div className="socials">
            <p>OUR SOCIALS</p>
            <div className="icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <div className="round">
                  <BsInstagram />
                </div>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <div className="round">
                  <AiOutlineTwitter />
                </div>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <div className="round">
                  <FaTelegramPlane />
                </div>
              </a>
            </div>
          </div>
        </Box>
      </Grid>
    </AdminDashboardLayout>
  );
}

export default Support;
