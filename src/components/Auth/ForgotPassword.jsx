import React from "react";
import { useNavigate } from "react-router-dom";
import { Stars } from "../../icons/Star";
import {
  Button,
  ButtonContainer,
  Description,
  DescriptionContainer,
  FormContainer,
  H1,
  Input,
  IntroText,
  LabelText,
  NameText,
  PositionText,
  RegisterContainer,
  RegisterForm,
  RegisterFrame,
} from "../../styles/authStyle/forgotPassword";

function ForgotPassword() {
  const navigate = useNavigate();

  const handleSendEmail = () => {
    navigate("/login");
  };

  return (
    <RegisterContainer>
      <FormContainer>
        <H1>Forgot Password</H1>

        <IntroText>
          We can assign tasks, set deadlines, and track progress effortlessly.
        </IntroText>
        <RegisterForm>
          <LabelText htmlFor="email">Email</LabelText>
          <Input
            type="email"
            id="email"
            placeholder="Input your Email"
            required
          />
          <ButtonContainer>
            <Button onClick={handleSendEmail}>Send E-mail</Button>
          </ButtonContainer>
        </RegisterForm>
      </FormContainer>
      <RegisterFrame>
        <DescriptionContainer>
          <Stars />
          <Description>
            "The dashboard tool streamlined our task management effortlessly.
            Assigning, tracking, and completing tasks has never been easier!"
          </Description>
          <NameText>Kathryn Murphy</NameText>
          <PositionText>Marketing Coordinator</PositionText>
        </DescriptionContainer>
      </RegisterFrame>
    </RegisterContainer>
  );
}

export default ForgotPassword;
