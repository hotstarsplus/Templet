import { Button, Form, Input, InputNumber, Radio } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};

/**注册页面---验证 */
export class RegisterView extends React.Component<any, any>{
    constructor(props: any) {
        super(props);

        this.onFinsh = this.onFinsh.bind(this);
    }

    public onFinsh(value: any) {
        console.log(value);
    }

    public onChange = (e: any) => {
        console.log('radio checked', e.target.value);
    };


    public render() {
        return (
            <div className="loginCanvasStyle">
                <div className="RegisterDiv">
                    <Form {...layout} name="nest-messages" onFinish={this.onFinsh} >
                        <Form.Item name={['user', 'name']} label="用户名" rules={[{ required: true, message: '请输入用户名，此为必填字段！' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'email']} label="邮箱" rules={[{ type: 'email', message: "格式错误！" }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'password']} label="密码" rules={[{ required: true, message: "请输入密码！" }]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item name={['user', 'age']} label="年龄" rules={[{ type: 'number', min: 0, max: 99,message:"输入不合法，请重新输入" }]}>
                            <InputNumber />
                        </Form.Item>
                        <Form.Item name={['user', 'sex']} label="性别">
                            <Radio.Group onChange={this.onChange}>
                                <Radio value={'男'}>男</Radio>
                                <Radio value={'女'}>女</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item name={['user', 'address']} label="地址">
                            <Input />
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Link to="/">
                                <Button style={{ margin: "0px 8px" }} type="dashed" >
                                    返回登录
                                </Button>
                            </Link>

                            <Button type="primary" htmlType="submit">
                                注册
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}