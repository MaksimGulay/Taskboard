import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  ButtonContainer,
  CreateAccount,
  Description,
  DescriptionContainer,
  FormContainer,
  H1,
  Input,
  IntroText,
  LabelText,
  Link,
  NameText,
  PositionText,
  RegisterContainer,
  RegisterForm,
  RegisterFrame,
  Span,
} from "../../styles/authStyle/registerStyle";
import { GoogleIcon } from "../../icons/Google";
import { Stars } from "../../icons/Star";

function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <RegisterContainer>
      <FormContainer>
        <H1>Register Here!</H1>

        <IntroText>
          We can assign tasks, set deadlines, and track progress effortlessly.
        </IntroText>
        <RegisterForm>
          <LabelText htmlFor="username">Username</LabelText>
          <Input
            type="text"
            id="username"
            placeholder="Input your username here"
            required
          />
          <LabelText htmlFor="email">Email</LabelText>
          <Input
            type="email"
            id="email"
            placeholder="Input your Email"
            required
          />
          <LabelText htmlFor="phone">Phone Number</LabelText>
          <Input
            type="phone"
            id="phone"
            placeholder="Input your phone number"
            required
          />
          <LabelText htmlFor="password">Password</LabelText>
          <Input
            type="password"
            id="password"
            placeholder="Input new password"
            required
          />
          <ButtonContainer>
            <Button onClick={handleRegister}>Sign up</Button>
            <GoogleIcon />
          </ButtonContainer>
        </RegisterForm>
        <CreateAccount>
          <Span>
            Have an account?
            <Link onClick={handleLogin}> Login Now</Link>
          </Span>
        </CreateAccount>
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

export default Register;
