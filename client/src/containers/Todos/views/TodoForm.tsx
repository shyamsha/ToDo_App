import React from "react";
import { Form, Input, Select, Button, DatePicker } from "antd";
import { Todo } from "../types";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

interface Props {
  onFinish: (values:Todo) => void;
  loading:boolean;
}

export default function ContactForm(props: Props) {
  const [form] = Form.useForm();

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="contact"
      onFinish={props.onFinish}
      initialValues={{
        prefix: "91",
      }}
      scrollToFirstError
    >
      <Form.Item
        name="title"
        label="Summary"
        rules={[
          {
            required: true,
            message: "Please provide your Summary!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
            message: "Please provide your Description!",
            whitespace: true,
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="dueDate"
        label="Due Date"
        rules={[
          {
            required: true,
            message: "Please provide your Due Date!",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="priority"
        label="Priority"
        rules={[
          {
            required: true,
            message: "Please provide your Priority!",
          },
        ]}
      >
        <Select placeholder="Select a option">
          <Option value="high">High</Option>
          <Option value="medium">Medium</Option>
          <Option value="low">Low</Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" loading={props.loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
