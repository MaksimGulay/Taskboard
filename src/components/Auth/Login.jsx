import React from "react";
import { replace, useNavigate } from "react-router-dom";
import {
  Button,
  ButtonContainer,
  CreateAccount,
  Description,
  DescriptionContainer,
  ForgotPasswordLink,
  FormContainer,
  H1,
  Input,
  IntroText,
  LabelText,
  Link,
  LoginContainer,
  LoginForm,
  LoginFrame,
  NameText,
  PositionText,
  Span,
} from "../../styles/authStyle/loginStyle";
import { GoogleIcon } from "../../icons/Google";
import { Stars } from "../../icons/Star";
// import { Counter } from "../../features/counter/Counter";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    // Логіка для входу
    event.preventDefault();
    navigate("/", { replace: true }); // Перехід на головну сторінку після успішного входу
  };

  const handleRegister = () => {
    navigate("/register");
  };
  const handleForgotPassword = () => {
    navigate("/forgot_password");
  };
  return (
    <LoginContainer>
      <FormContainer onSubmit={handleLogin}>
        <H1>Welcome Back!</H1>
        {/* <Counter /> */}
        <IntroText>
          We can assign tasks, set deadlines, and track progress effortlessly.
        </IntroText>
        <LoginForm>
          <LabelText htmlFor="username">Username</LabelText>
          <Input
            type="text"
            id="username"
            placeholder="Input your username here"
            required
            autoComplete="username"
          />
          <LabelText htmlFor="password">Password</LabelText>
          <Input
            type="password"
            id="password"
            placeholder="Input your username here"
            required
            autoComplete="current-password"
          />
          <ForgotPasswordLink onClick={handleForgotPassword}>
            Forgot password?
          </ForgotPasswordLink>
          <ButtonContainer>
            <Button type="submit">Sign in</Button>
            <GoogleIcon />
          </ButtonContainer>
        </LoginForm>
        <CreateAccount>
          <Span>
            Don’t have account?
            <Link onClick={handleRegister}> Create account</Link>
          </Span>
        </CreateAccount>
      </FormContainer>
      <LoginFrame>
        <DescriptionContainer>
          <Stars />
          <Description>
            "The dashboard tool streamlined our task management effortlessly.
            Assigning, tracking, and completing tasks has never been easier!"
          </Description>
          <NameText>Kathryn Murphy</NameText>
          <PositionText>Marketing Coordinator</PositionText>
        </DescriptionContainer>
      </LoginFrame>
    </LoginContainer>
  );
}

export default Login;
