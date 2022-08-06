// 从 react-dom/client 引入 ReactDOM
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// React 18 的语法发生改变了
ReactDOM.createRoot(document.getElementById('root')).render(
        <App />
)
