import React, {  } from "react";
import { Form, Input, Select, Button, } from "antd";
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
  onFinish: () => void;
}

export default function ContactForm(props: Props) {
  const [form] = Form.useForm();

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
      </Select>
    </Form.Item>
  );


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
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: "Please provide your Name!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="companyname"
        label="Company Name"
        rules={[
          {
            required: true,
            message: "Please provide your Company Name!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please provide your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="designation"
        label="Designation"
        rules={[
          {
            required: true,
            message: "Please provide your Designation!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="gst"
        label="Gst Treatment"
        rules={[
          {
            required: true,
            message: "Please provide your Gst Treatment!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            pattern: /^[^0-9]*(?:(\d)[^0-9]*){10}$/,
            message: "Please provide your valid Mobile Number",
          },
        ]}
      >
        <Input
          type="number"
          addonBefore={prefixSelector}
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
