import React, { Fragment, Component, FC } from "react";
import { Route, Switch } from "react-router";
import Todo from "../containers/Todos/Todos";


interface State {
  hasError:boolean;
}

class AppNavigator extends Component<any, any> {
  state: State = {
    hasError: false,
  };

  App: FC = () => (
    <Fragment>
      <Switch>
        <Route path={`/`} component={Todo} exact />
      </Switch>
    </Fragment>
  );


  render() {

    return <this.App />;

  }
}



export default AppNavigator;
