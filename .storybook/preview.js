import '../src/styles/index.scss';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import React from 'react';


addDecorator(withInfo); 
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

