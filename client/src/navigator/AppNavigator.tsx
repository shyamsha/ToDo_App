import React, { Fragment, Component, Dispatch, FC } from "react";
import { Route, Switch } from "react-router";
import { connect } from "react-redux";
import { RouteEnums } from "./RouteEnums";


interface PropsFromState {}

interface PropsDispatchFromState {}

type AllProps = PropsFromState & PropsDispatchFromState;

interface State {
  hasError:boolean;
}

class AppNavigator extends Component<any, any> {
  state: State = {
    hasError: false,
  };

  Auth: FC = () => (
    <Fragment>
      <Switch>
        <Route path={`/${RouteEnums.LOGIN}`} component={()=>null} />
      </Switch>
    </Fragment>
  );

  App: FC = () => (
    <Fragment>
      <Switch>
        <Route path={`/`} component={()=>null} exact />
      </Switch>
    </Fragment>
  );


  render() {

    return <this.App />;

  }
}

const mapStateToProps: any = () => ({});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({});

export default connect<any>(mapStateToProps, mapDispatchToProps)(AppNavigator);
