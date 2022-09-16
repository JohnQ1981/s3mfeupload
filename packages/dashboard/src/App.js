import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import SignupForm from './components/SignupForm';
import SignupForm2 from './components/SignupForm2';
import SignupForm3 from './components/SignupForm3';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/signupform2" component={SignupForm2} />
            <Route exact path="/signupform" component={SignupForm} />
            <Route path="/" component={SignupForm3} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
