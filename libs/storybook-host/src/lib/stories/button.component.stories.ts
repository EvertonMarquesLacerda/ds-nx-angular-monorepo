import { ButtonComponent } from '@ds-nx-angular-monorepo/button';
import { Meta, StoryObj } from "@storybook/angular";

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Button'
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const PrimaryButton: Story = {
  args: {
      text: 'Action'
  }
};

export const SecondaryButton: Story = {}
