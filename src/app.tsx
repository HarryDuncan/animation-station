import React from "react";

import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";

// Containers
import { LandingContainer } from "./@landing";
import { LiveContainer } from "./@live";
import { PlayContainer } from "./@play";
import { DigitalArt } from "./views/digital-art/DigitalArt";
// Components
import { Navigation } from "./views/navigation/Navigation";

// Redux
import { store } from "./redux/store";
import { Provider } from "react-redux";

import styled, { ThemeProvider } from "styled-components";
import { THEME } from "./theme/theme";
interface AppProps {}

export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
`;

export const App: React.FunctionComponent<AppProps> = ({}) => {
  const history = useHistory();

  // When a nav item is clicked this is where the actions take place

  return (
    <ThemeProvider theme={THEME}>
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer>
            <Navigation />
            <Switch>
              <Route exact path="/play" component={PlayContainer} />
              <Route exact path="/live" component={LiveContainer} />
              <Route exact path="/digital-art" component={DigitalArt} />
              <Route exact path="/" component={LandingContainer} />
            </Switch>
          </AppContainer>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};
