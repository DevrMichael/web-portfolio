import React from 'react';
// import { faEnvelope } from '@fortawesome/pro-light-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
  title: 'WebPortfolio/Button',
  component: Button,
  parameters: {
    controls: {
      exclude: '^icon$|^variant$|^className$|^data-testid$|^className$|^onClick$',
    },
  },
  argTypes: {
    children: {
      name: 'Text',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 'medium',
  children: 'Button',
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  size: 'medium',
  children: 'Button',
  // icon: <FontAwesomeIcon icon={faEnvelope} />,
  iconPosition: 'left',
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'medium',
  children: 'Button',
  variant: 'secondary',
};

export const SecondaryWithIcon = Template.bind({});
SecondaryWithIcon.args = {
  size: 'medium',
  children: 'Button',
  variant: 'secondary',
  // icon: <FontAwesomeIcon icon={faEnvelope} />,
  iconPosition: 'left',
};

export const Gray = Template.bind({});
Gray.args = {
  size: 'medium',
  children: 'Button',
  variant: 'gray',
};

export const GrayWithIcon = Template.bind({});
GrayWithIcon.args = {
  size: 'medium',
  children: 'Button',
  variant: 'gray',
  // icon: <FontAwesomeIcon icon={faEnvelope} />,
  iconPosition: 'left',
};

export const Link = Template.bind({});
Link.args = {
  size: 'medium',
  children: 'Button',
  variant: 'link',
};

export const LinkWithIcon = Template.bind({});
LinkWithIcon.args = {
  size: 'medium',
  children: 'Button',
  variant: 'link',
  // icon: <FontAwesomeIcon icon={faEnvelope} />,
  iconPosition: 'left',
};

export const Loading = Template.bind({});
Loading.args = {
  size: 'medium',
  children: 'Button',
  variant: 'primary',
  isLoading: true,
};
