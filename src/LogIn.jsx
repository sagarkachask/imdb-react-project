import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "./apiCalls";
import UserProfileContext from "./contexts";

export default function LogIn() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);
  let [, setCurrentUser] = useContext(UserProfileContext);

  const logInSubmit = (values) => {
    const username = values.username;
    const password = values.password;
    loginUser({ username, password })
      .then((res) => {
        window.localStorage.setItem("imdb_token", res.data.token);
        window.localStorage.setItem("imdb_user", JSON.stringify(res.data.user));
        setCurrentUser(res.data.user);
        navigate("/movies");
      })
      .catch((err) => {
        setLoginError(true);
        console.error(err);
      });
  };

  return (
    <div
      className="card mx-auto shadow p-3 bg-body rounded"
      style={{ width: "25%", height: "auto" }}
    >
      <Form
        name="normal_login"
        className="login-form d-flex flex-column align-items-center justify-content-center"
        initialValues={{ remember: true }}
        onFinish={logInSubmit}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
          style={{ width: "75%", marginTop: "24px" }}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
          style={{ width: "75%" }}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {loginError && (
          <p style={{ color: "red" }}>
            Oops! Something went wrong! Maybe try again?
          </p>
        )}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ marginRight: "0.75rem" }}
          >
            Log in
          </Button>
          Or
          <NavLink style={{ marginLeft: "0.75rem" }} to="/signup">
            Sign Up
          </NavLink>
        </Form.Item>
      </Form>
    </div>
  );
}
