import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";
import { Button } from "..";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>버튼</Button>
);

export const Basic = Template.bind({});

Basic.args = {
  children: "Button",
  variant: "primary",
  size: "medium",
  width: 145,
  height: 40,
  fullWidth: false,
  borderRadius: "8px",
  fontSize: "14px",
};

Basic.argTypes = {
  onClick: { action: "clicked" },
};

export function Size() {
  return (
    <Container>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  & + & {
    margin-top: 0.5rem;
  }
`;
