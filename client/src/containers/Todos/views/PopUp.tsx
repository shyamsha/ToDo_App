import React from 'react';
import { Modal } from 'antd';
import TodoForm from './TodoForm';

interface Props {
  visible:boolean;
  cancelModal:()=>void;
  onFinish:()=>void;
}

export default function PopUp(props:Props) {

    return (
      <>
        <Modal
          visible={props.visible}
          title="Contact"
          onCancel={props.cancelModal}
          footer={null}
          centered
        >
         <TodoForm onFinish={props.onFinish}/>
        </Modal>
      </>
    );
  }