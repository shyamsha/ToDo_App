import React from "react";
import { Modal } from "antd";
import TodoForm from "./TodoForm";
import { Todo } from "../types";

interface Props {
  visible: boolean;
  cancelModal: () => void;
  onFinish: (values: Todo) => void;
  loading:boolean;
}

export default function PopUp(props: Props) {
  return (
    <>
      <Modal
        visible={props.visible}
        title="Contact"
        onCancel={props.cancelModal}
        footer={null}
        centered
      >
        <TodoForm onFinish={props.onFinish} loading={props.loading}/>
      </Modal>
    </>
  );
}
