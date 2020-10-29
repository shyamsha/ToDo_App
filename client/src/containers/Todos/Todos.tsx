import React, { Component, Dispatch, Fragment } from "react";
import { Tabs } from "antd";
import AllTodos from "./views/AllTodos";
import CompletedTodos from "./views/CompletedTodos";
import PendingTasks from "./views/PendingTasks";
import { Select, Input } from "antd";
import { connect } from "react-redux";
import { PlusCircleFilled } from "@ant-design/icons";
import { ApplicationState } from "../../store";
import { todoRequest } from "./actions";
import { Todo } from "./types";

const { Search } = Input;
const { Option } = Select;
const { TabPane } = Tabs;

interface PropsFromState {
  loading:boolean;
  todos:Todo[];
  error:{
    todo:string;
  }
}

interface PropsDispatchFromState {
  onTodo:typeof todoRequest;
}

type AllProps = PropsFromState & PropsDispatchFromState;

interface State {}

class Todos extends Component<AllProps, State> {
  state: State = {};

  tabChange = (key: string) => {};

  priorityChange = (value: string) => {};

  selectChange = (value: string) => {};

  onSearch = (value: string) => {
    console.log(value);
  };

  componentDidMount() {
    this.props.onTodo()
    
  }

  render() {
    const {todos,loading} = this.props
    return (
      <Fragment>
        <div style={{ padding: "2rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "1rem",
              fontWeight: "bolder",
              fontSize: "1.5rem",
              color: "slategray"
            }}
          >
            <div>TODO_APP</div>
            <div>
              <PlusCircleFilled  style={{color:"#1890ff",fontSize:"2rem"}}/>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "1rem",
            }}
          >
            <div>
              <span>Group By: </span>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                onChange={this.selectChange}
                defaultValue="None"
              >
                <Option value="None">None</Option>
                <Option value="Created On">Created On</Option>
                <Option value="Pending On">Pending On</Option>
                <Option value="Priority">Priority</Option>
              </Select>
              <span>
                {false ? (
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a Priority"
                    onChange={this.priorityChange}
                  >
                    <Option value="Created On">Low</Option>
                    <Option value="Pending On">Medium</Option>
                    <Option value="Priority">Heigh</Option>
                  </Select>
                ) : null}
              </span>
            </div>
            <div>
              <Search
                placeholder="input search text"
                onSearch={this.onSearch}
                style={{ width: 200 }}
              />
            </div>
          </div>
          <div>
            <Tabs onChange={this.tabChange} type="card">
              <TabPane tab="All tasks" key="1">
                <AllTodos todos={todos} loading={loading}/>
              </TabPane>
              <TabPane tab="Completed" key="2">
                <CompletedTodos />
              </TabPane>
              <TabPane tab="Pending" key="3">
                <PendingTasks />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps: any = ({todos}:ApplicationState) => ({
  loading:todos.loading,
  todos:todos.todos,
  error:todos.errors
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
onTodo:()=>dispatch(todoRequest())
});

export default connect<any>(mapStateToProps, mapDispatchToProps)(Todos);
