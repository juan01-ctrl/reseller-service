import type { Preview } from "@storybook/react"
import { withThemeByClassName } from "@storybook/addon-themes"
import "../app/globals.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color|foreground)$/i,
        date: /Date$/i,
      },
    },
    a11y: { config: { rules: [{ id: "color-contrast", enabled: true }] } },
    backgrounds: { disable: true },
  },
  decorators: [
    withThemeByClassName({
      themes: { light: "", dark: "dark" },
      defaultTheme: "light",
      parentSelector: "html",
    }),
  ],
}

export default preview
