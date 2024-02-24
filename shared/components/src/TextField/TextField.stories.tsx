import React from 'react';
import { faEnvelope, faLock, faMagnifyingGlass } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextField from './TextField';

export default {
  title: 'WebPortfolio/TextField',
  component: TextField,
  parameters: {
    controls: {
      exclude: '^icon$|^data-testid$|^onChange$|^onBlur$',
    },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <div style={{ width: '31rem' }}>
    <TextField {...args} />
  </div>
);

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  size: 'medium',
  placeholder: 'Placeholder text',
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  size: 'medium',
  placeholder: 'Enter your email...',
  icon: <FontAwesomeIcon icon={faEnvelope} />,
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  size: 'medium',
  placeholder: 'Enter your password...',
  icon: <FontAwesomeIcon icon={faLock} />,
};

export const Search = Template.bind({});
Search.args = {
  type: 'search',
  size: 'medium',
  placeholder: 'Enter your query...',
  icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  type: 'text',
  size: 'medium',
  placeholder: 'Enter your input...',
  icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
  label: 'This is a label',
};

export const WithHint = Template.bind({});
WithHint.args = {
  type: 'text',
  size: 'medium',
  placeholder: 'Enter your input...',
  icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
  hint: 'This is a hint',
};

export const LargeTextfield = Template.bind({});
LargeTextfield.args = {
  type: 'text',
  size: 'large',
  placeholder: 'Enter your input...',
  icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
};
