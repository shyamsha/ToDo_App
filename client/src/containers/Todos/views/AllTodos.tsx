/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Popconfirm, Table } from "antd";
import React, { Fragment } from "react";
import { Todo } from "../types";
import { DeleteFilled, FormOutlined } from "@ant-design/icons";
import moment from "moment";

interface Props {
  todos: Todo[];
  loading: boolean;
  tab: string;
}

export default function AllTodos(props: Props) {
  const columns: any = [
    {
      title: "Summary",
      dataIndex: "title",
      key: "1",
      // render: (text: string) => {
      //   <a>{text}</a>;
      // },
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "2",
    },
    {
      title: "Created On",
      dataIndex: "createdAt",
      key: "3",
      render: (text: string) => {
        return <div>{moment(text).format("DD/MM/YY")}</div>;
      },
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "4",
    },
    {
      title: "Acton",
      key: "action",
      render: (text: string, record: string) => {
        return (
          <div>
            <span>
              <FormOutlined
                style={{ color: "#1890ff", fontSize: "1rem" }}
                onClick={() => null}
              />
            </span>

            <span style={{ padding: "0 0.5rem" }}>
              <Button type="primary" size="small">
                Done
              </Button>
            </span>
            {props.todos.length >= 1 ? (
              <Popconfirm
                title="Sure to delete?"
                // onConfirm={() => handleDelete(record._id)}
              >
                <DeleteFilled style={{ color: "red", fontSize: "1rem" }} />
              </Popconfirm>
            ) : null}
          </div>
        );
      },
    },
  ];

  if (props.todos === null && props.loading) {
    return <span>Loading...</span>;
  }
  console.log();
  return (
    <Fragment>
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
