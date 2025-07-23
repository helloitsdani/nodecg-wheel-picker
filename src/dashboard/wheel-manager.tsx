import { ConfigProvider, theme } from "antd"
import React from "react"
import ReactDOM from "react-dom/client"

const rootEl = document.getElementById("root")
const root = ReactDOM.createRoot(rootEl!)

root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm
      }}
    >
      <h1>lets make a wheel</h1>
    </ConfigProvider>
  </React.StrictMode>
)
