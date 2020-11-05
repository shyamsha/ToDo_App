/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Popconfirm, Spin, Table } from "antd";
import React, { Fragment, useState } from "react";
import { Todo } from "../types";
import { DeleteFilled, FormOutlined } from "@ant-design/icons";
import moment from "moment";

interface Props {
  todos: Todo[];
  loading: boolean;
  tab: string;
  showModal: () => void;
  getTodo: (params: { _id: string }) => void;
  DeleteTodo: (params: { _id: string }) => void;
}

export default function AllTodos(props: Props) {
  const [reOpen, setReOpen] = useState(false);
  const [id, setId] = useState("");

  const visibleModal = (id: string) => {
    setId(id);
    props.getTodo({ _id: id });
    props.showModal();
  };
  const toggle = () => {
    setReOpen(true);
  };
  const columns: any = [
    {
      title: "Summary",
      dataIndex: "title",
      key: "1",
      // render: (text: string) => {
      //   <a>{text}</a>;
      // },
      sorter: (a: any, b: any) => {
        if (a.title > b.title) {
          return 1;
        } else if (a.title < b.title) {
          return -1;
        } else {
          return 0;
        }
      },
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "2",
      sorter: (a: any, b: any) => {
        if (a.priority > b.priority) {
          return 1;
        } else if (a.priority < b.priority) {
          return -1;
        } else {
          return 0;
        }
      },
    },
    {
      title: "Created On",
      dataIndex: "createdAt",
      key: "3",
      render: (text: string) => {
        return <div>{moment(text).format("DD/MM/YY")}</div>;
      },
      sorter: (a: any, b: any) => {
        if (a.createdAt > b.createdAt) {
          return 1;
        } else if (a.createdAt < b.createdAt) {
          return -1;
        } else {
          return 0;
        }
      },
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "4",
      sorter: (a: any, b: any) => {
        if (a.dueDate > b.dueDate) {
          return 1;
        } else if (a.dueDate < b.dueDate) {
          return -1;
        } else {
          return 0;
        }
      },
    },
    {
      title: "Acton",
      key: "action",
      render: (text: string, record: Todo) => {
        return (
          <div>
            <span>
              <FormOutlined
                style={{ color: "#1890ff", fontSize: "1rem" }}
                onClick={() => visibleModal(record._id as string)}
              />
            </span>

            <span style={{ padding: "0 0.5rem" }}>
              {record._id!==id && !reOpen ? (
                <Button type="primary" size="small" onClick={toggle}>
                  Done
                </Button>
              ) : (
                <Button type="primary" size="small">
                  Re-Open
                </Button>
              )}
            </span>
            {props.todos.length >= 1 ? (
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() =>
                  props.DeleteTodo({ _id: record._id as string })
                }
              >
                <DeleteFilled style={{ color: "red", fontSize: "1rem" }} />
              </Popconfirm>
            ) : null}
          </div>
        );
      },
    },
  ];

  if (props.loading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "-webkit-fill-available",
          paddingTop: "4rem",
        }}
      >
        <Spin />
      </div>
    );
  }

  return (
    <Fragment>
      {JSON.stringify(reOpen)}
      <div>
        {props.tab === "1" && (
          <Table
            columns={columns}
            dataSource={props.todos}
            pagination={false}
            bordered
          />
        )}
        {props.tab === "2" && (
          <Table
            columns={columns}
            dataSource={props.todos.filter(
              (todo) => todo.currentState !== "open"
            )}
            pagination={false}
            bordered
          />
        )}
        {props.tab === "3" && (
          <Table
            columns={columns}
            dataSource={props.todos.filter(
              (todo) => todo.currentState !== "done"
            )}
            pagination={false}
            bordered
          />
        )}
      </div>
    </Fragment>
  );
}
