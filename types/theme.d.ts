import "@emotion/react";

// This type is only created to override @emotion/react theme
// It should be updated as the theme itself updates, but should not
// be directly used anywhere.
declare module "@emotion/react" {
  export interface Theme {
    palette: {
      primary: {
        main: string;
        contrastText: string;
      };
    };
  }
}
