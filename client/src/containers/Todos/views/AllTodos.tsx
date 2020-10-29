/* eslint-disable jsx-a11y/anchor-is-valid */
import { Popconfirm, Table } from "antd";
import React, { Fragment } from "react";
import { Todo } from "../types";

interface Props {
  todos: Todo[];
  loading: boolean;
}

export default function AllTodos(props: Props) {
  const columns: any = [
    {
      title: "Summary",
      dataIndex: "description",
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
    { title: "Created On", dataIndex: "createdAt", key: "3" },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "4",
    },
    {
      title: "Acton",
      key: "action",
      render: (text: string, record: string) =>
        props.todos.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            // onConfirm={() => handleDelete(record._id)}
          >
            <a href="">Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  if(props.todos===null){
    return <span>Loading...</span>
  }
console.log(props.todos)
  return (
    <Fragment>
      <div>
        <Table
          columns={columns}
          loading={props.todos === null ? true : false}
          dataSource={props.todos}
          pagination={false}
          bordered
        />
      </div>
    </Fragment>
  );
}
