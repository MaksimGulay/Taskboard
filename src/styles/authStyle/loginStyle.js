import styled from "styled-components";
import bgImage from "../../images/nikhil-D52iCIm_Csg-unsplash.jpg";

export const LoginContainer = styled.div`
  background: var(--neutral-white);
  display: flex;
  justify-content: space-between;
  padding-top: 28px;
  padding-bottom: 28px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 145px;
`;

export const CreateAccount = styled.div`
  display: flex;
`;

export const H1 = styled.h1`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 42px;
  line-height: 110%;
  color: var(--neutral-title);
  margin-bottom: 10px;
`;

export const IntroText = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  line-height: 133%;
  color: var(--neutral-body-text);
  margin-bottom: 32px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 121px;
`;

export const LabelText = styled.label`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 16px;
  line-height: 144%;
  color: var(--neutral-title);
  margin-bottom: 8px;
`;

export const Input = styled.input`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 144%;
  color: var(--neutral-body-text);

  box-sizing: border-box;
  border: 1.59px solid var(--neutral-stroke);
  border-radius: 15px;
  padding: 24px 16px;
  width: 434px;
  height: 71px;
  margin-bottom: 32px;

  background: var(--neutral-background);
`;

export const Button = styled.button`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 18px;
  line-height: 144%;
  color: var(--neutral-white);
  text-align: center;

  border-radius: 10px;
  width: 354px;
  height: 64px;

  background: var(--neutral-body-text);
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const Span = styled.span`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 144%;
  text-align: center;
  color: var(--neutral-body-text);
`;

export const ForgotPasswordLink = styled.a`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 144%;
  color: var(--neutral-title);
  margin-bottom: 32px;
`;

export const Link = styled.a`
  font-weight: 700;
  color: var(--neutral-title);
`;

export const LoginFrame = styled.div`
  border-radius: 23px;
  width: 703px;
  height: 844px;
  background: url(${bgImage}) no-repeat;
  background-size: 703px 844px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

export const DescriptionContainer = styled.div`
  border-radius: 21px;
  width: 570px;
  height: auto;
  padding: 46px 31px;

  backdrop-filter: blur(35.5px);
  background: rgba(30, 9, 9, 0.02);
  margin-bottom: 49px;
`;

export const Description = styled.p`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 24px;
  line-height: 158%;
  color: var(--neutral-white);
  padding-top: 16px;
  padding-bottom: 23px;
`;

export const NameText = styled.p`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 20px;
  line-height: 170%;
  color: var(--neutral-white);
  padding-bottom: 3px;
`;

export const PositionText = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 114%;
  color: var(--neutral-white);
`;
