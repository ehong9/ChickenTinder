import { addDecorator, addParameters, configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { I18nextProvider } from "react-i18next";
import { addDecorator, addParameters } from "@storybook/react";
import { withI18n } from "storybook-addon-i18n";
import i18n from "../src/i18n";
import { addDecorator } from "@storybook/react";
import { muiTheme } from "storybook-addon-material-ui";
import theme from "../src/styles/theme";
import { addDecorator } from "@storybook/react";

setOptions({
  sortStoriesByKind: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  sidebarAnimations: false,
});

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  i18n: {
    provider: I18nProvider,
    providerProps: {
      i18n,
    },
    supportedLocales: ["en"],
    providerLocaleKey: "locale",
  },
});
addDecorator(withKnobs);
addDecorator(muiTheme([theme]));
addDecorator(withI18n);
addDecorator(withA11y);
