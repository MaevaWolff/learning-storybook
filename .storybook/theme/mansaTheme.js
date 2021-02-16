import { create } from "@storybook/theming";
import Logo from "../assets/mansa-catch.png";

export default create({
  base: "light",

  colorPrimary: "hotpink",
  colorSecondary: "deepskyblue",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  brandTitle: "Mansa - DesignSystem",
  brandUrl: "https:/getmansa.com",
  brandImage: Logo,
});
