import type { Meta, StoryObj } from "@storybook/react";
import AuthProvider from "@/context/AuthProvider";

import { NavBar } from "./nav";
import { navData } from "@/lib/navData";
import { NavDataType } from "@/components/Nav/nav.type";

const meta = {
  title: "Example/NavBar",
  decorators: [
    (Story) => (
      <AuthProvider>
        <Story />
      </AuthProvider>
    ),
  ],
  component: NavBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { externalNavData: navData as NavDataType, children: null },
};
