import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import wavingLady from '../assets/illustration-waving-lady.svg';
import Button from '../Button/Button';
import TextField from '../TextField/TextField';
import Form from './Form';

export default {
  title: 'WebPortfolio/Form',
  component: Form,
  parameters: {
    controls: {
      exclude: '^children$|^value$|^onSubmit$',
    },
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => (
  <div style={{ width: '31rem' }}>
    <Form {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Form title',
  children: (
    <>
      <TextField
        placeholder="Email or phone"
        type="email"
        icon={<FontAwesomeIcon icon={faEnvelope} />}
        label="User name"
        size="large"
      />

      <TextField
        placeholder="Password"
        type="password"
        icon={<FontAwesomeIcon icon={faLock} />}
        label="Password"
        size="large"
      />

      <Button size="x-large">Sign in</Button>
    </>
  ),
  description: 'form description',
  image: wavingLady,
};
