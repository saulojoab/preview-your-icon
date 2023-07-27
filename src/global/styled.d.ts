import "styled-components";
import { StyledBreakpointsTheme } from "styled-breakpoints";

import theme from "./theme";

export type ITheme = typeof theme & StyledBreakpointsTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
