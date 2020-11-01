import React, { Component, Dispatch, Fragment } from "react";
import { Spin, Tabs } from "antd";
import AllTodos from "./views/AllTodos";
import { Select, Input } from "antd";
import { connect } from "react-redux";
import { PlusCircleFilled } from "@ant-design/icons";
import { ApplicationState } from "../../store";
import {
  todoByIdRequest,
  todoCreateRequest,
  todoDeleteRequest,
  todoEditRequest,
  todoRequest,
  todoSearchRequest,
} from "./actions";
import { Todo } from "./types";
import PopUp from "./views/PopUp";
import moment from "moment";

const { Search } = Input;
const { Option } = Select;
const { TabPane } = Tabs;

interface PropsFromState {
  loading: boolean;
  todos: Todo[];
  todo: Todo;
  error: {
    todo: string;
  };
}

interface PropsDispatchFromState {
  onTodo: typeof todoRequest;
  onTodoCreate: typeof todoCreateRequest;
  onGetTodo: typeof todoByIdRequest;
  onEditTodo: typeof todoEditRequest;
  onDeleteTodo: typeof todoDeleteRequest;
  onSearchTodo: typeof todoSearchRequest;
}

type AllProps = PropsFromState & PropsDispatchFromState;

interface State {
  tab: string;
  visible: boolean;
}

class Todos extends Component<AllProps, State> {
  state: State = {
    tab: "1",
    visible: false,
  };

  tabChange = (key: string) => {
    if (key === "1") {
      this.setState({ tab: "1" });
    }
    if (key === "2") {
      this.setState({ tab: "2" });
    }
    if (key === "3") {
      this.setState({ tab: "3" });
    }
  };

  priorityChange = (value: string) => {};

  selectChange = (value: string) => {};

  search = (value: string) => {
    console.log(value);
    this.props.onSearchTodo({ value: value });
  };

  showModal = () => {
    this.setState({ visible: !this.state.visible });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  onFinish = (values: Todo) => {
    console.log(values);
    const data = {
      title: values.title,
      description: values.description,
      dueDate: moment(values.dueDate).format("DD/MM/YY"),
      priority: values.priority,
      currentState: "open",
    };
    this.props.onTodoCreate(data);
  };

  componentDidMount() {
    this.props.onTodo();
  }

  componentDidUpdate(prevProps: AllProps, prevState: State) {
    const prev = prevProps;
    const now = this.props;
    if (prev.loading && !now.loading && prevState.visible) {
      this.setState({ visible: false });
    }
  }

  render() {
    const { todos, loading } = this.props;
    const { visible, tab } = this.state;
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
              color: "slategray",
            }}
          >
            <div>TODO_APP</div>
            <div>
              <PlusCircleFilled
                style={{ color: "#1890ff", fontSize: "2rem" }}
                onClick={this.showModal}
              />
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
                onSearch={this.search}
                style={{ width: 200 }}
              />
            </div>
          </div>
          <div>
            <Tabs
              onChange={this.tabChange}
              type="card"
              defaultActiveKey={this.state.tab}
            >
              <TabPane tab="All tasks" key="1" />

              <TabPane tab="Completed" key="2" />

              <TabPane tab="Pending" key="3" />
            </Tabs>
          </div>
          <AllTodos
            todos={todos}
            loading={loading}
            tab={tab}
            showModal={this.showModal}
            getTodo={this.props.onGetTodo}
            DeleteTodo={this.props.onDeleteTodo}
          />
          {JSON.stringify(visible)}
          {visible && (
            <PopUp
              visible={visible}
              cancelModal={this.handleCancel}
              onFinish={this.onFinish}
              loading={loading}
            />
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps: any = ({ todos }: ApplicationState) => ({
  loading: todos.loading,
  todos: todos.todos,
  todo: todos.todo,
  error: todos.errors,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onTodo: () => dispatch(todoRequest()),
  onTodoCreate: (params: Todo) => dispatch(todoCreateRequest(params)),
  onGetTodo: (params: { _id: string }) => dispatch(todoByIdRequest(params)),
  onEditTodo: (params: { id: string; data: Todo }) =>
    dispatch(todoEditRequest(params)),
  onDeleteTodo: (params: { _id: string }) =>
    dispatch(todoDeleteRequest(params)),
  onSearchTodo: (params: { value: string }) =>
    dispatch(todoSearchRequest(params)),
});

export default connect<any>(mapStateToProps, mapDispatchToProps)(Todos);
