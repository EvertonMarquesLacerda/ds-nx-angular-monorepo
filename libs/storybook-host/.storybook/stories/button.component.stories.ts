import { ButtonComponent } from './../../../button/src/lib/button/button.component';
import type { Meta, StoryObj } from "@storybook/angular";

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Button'
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const PrimaryButton: Story = {}
export const SecondaryButton: Story = {}
