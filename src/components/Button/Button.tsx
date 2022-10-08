import React, { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 버튼 종류
   */
  variant?: "primary" | "secondary" | "tertiary";
  /**
   * 버튼 사이즈
   */
  size?: "small" | "medium" | "large";
  /**
   * 버튼 가로 길이
   */
  width?: number;
  /**
   * 버튼 세로 길이
   */
  height?: number;
  /**
   * 버튼 풀 사이즈
   */
  fullWidth?: boolean;
  /**
   * 버튼 둥글기
   */
  borderRadius?: string;
  /**
   * 폰트 크기
   */
  fontSize?: string;
  children: ReactNode;
}

function Button({
  children,
  variant = "primary",
  size = "medium",
  ...rest
}: ButtonProps) {
  return <ButtonStyled>{children}</ButtonStyled>;
}

const ButtonStyled = styled.button<ButtonProps>`
  display: inline-flex;
`;

export default Button;
