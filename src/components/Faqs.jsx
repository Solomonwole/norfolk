import { styled } from "styled-components";
import { PageContainer } from "../GlobalStyle";
import { useState } from "react";
import DataFaq from "./faq/Data";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import PropTypes from "prop-types"

function Faqs({ contact }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [DataFaqs] = useState(DataFaq);

  const toggleAnswer = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <Layout id="faqs">
      <PageContainer>
        <Grid>
          <div className="left">
            <h2>
              Frequently Asked
              <br />
              Questions
            </h2>
            <p>
              Can’t find the answer you&apos;re looking for?{" "}
              <span onClick={contact}>Contact Us</span>{" "}
            </p>
          </div>

          <div className="right">
            <FAQContainer>
              {DataFaqs.map((faq, index) => (
                <FAQItem key={index}>
                  <div className="flex" onClick={() => toggleAnswer(index)}>
                    <Question onClick={() => toggleAnswer(index)}>
                      {faq.question}
                    </Question>
                    {activeIndex === index ? (
                      <IoIosArrowUp className="icon" />
                    ) : (
                      <IoIosArrowDown className="icon" />
                    )}
                  </div>
                  <Answer isOpen={activeIndex === index}>{faq.answer}</Answer>
                </FAQItem>
              ))}
            </FAQContainer>
          </div>
        </Grid>
      </PageContainer>
    </Layout>
  );
}
Faqs.propTypes = {
    contact: PropTypes.func.isRequired,
  };
export default Faqs;

const Layout = styled.div`
  background: rgba(21, 31, 54, 0.03);
  margin-top: 200px;
  padding: 30px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  h2 {
    margin-bottom: 30px;
    margin-top: 30px;
  }

  span {
    color: #6e47ff;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    row-gap: 50px;
  }
`;

const FAQContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

const FAQItem = styled.div`
  padding: 20px 0;
  margin: 10px 0;
  border-bottom: 1px solid #0f172a22;

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    .icon {
      color: #0f172a;
      font-size: 20px;
    }
  }
`;

const Question = styled.div`
  cursor: pointer;
  font-weight: bold;
  color: #0f172a;
`;

const Answer = styled.div`
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  transition: max-height 0.3s ease-out;
  color: #0f172a;
  padding: ${({ isOpen }) => (isOpen ? "15px 0" : "")};
  line-height: 150%;
  font-weight: 400;
`;
