import { ThemeProvider } from 'emotion-theming';
import * as React from 'react';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import styled from '@emotion/styled';
import Global from '../ui/global';
import l from '../ui/layout';
import th from '../ui/theme';
import ty from '../ui/typography';

const Main = styled(l.Div)({
  margin: '0 auto',
  maxWidth: th.widths.maxPage,
  minHeight: '100vh',
});

interface State {
  loading: boolean;
}

class App extends React.Component<{}, State> {
  render() {
    return (
      <Router>
        <ThemeProvider theme={th}>
          <Main id="top">
            <Switch>
              <Route
                exact
                path="/"
                component={() => <ty.H1 center>Vertical Black</ty.H1>}
              />
              <Redirect to="/" />
            </Switch>
          </Main>
          <Global />
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
