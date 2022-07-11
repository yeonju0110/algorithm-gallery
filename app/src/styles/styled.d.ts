import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      agBlue: string;
      agMint: string;
      agGray: string;
      agDarkGray: string;
      agTextGray: string;
      agTextNavy: string;
      agRed: string;
      success: string;
      danger: string;
      warning: string;
      info: string;
    };
    window: {
      pc: string;
      tab: string;
      mobile: string;
      mobileS: string;
    };
  }
}
