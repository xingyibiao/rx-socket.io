### 此库仅将常见的on, emit两个方法通过rxjs进行了封装

使用方法如下：  

``` jsx
import RxSocket from './rx.socket.js'

import React, { Component } from 'react';
import RxSocket from './rx.socket'

export default class Chat extends Component {
  constructor() {
    super()
    // this.socket = io('http://localhost:3000')
    this.socket = new RxSocket('http://localhost:3000')

    this.state = {
      msg: ''
    }
  }

  componentDidMount() {
    // 接受服务器发送消息
    this.socket.on('hello').subscribe((e) => {
      this.setState({
        msg: e
      })
    })
  }

  // 向服务端发送消息
  sendMsg() {
    this.socket.emit('from', 'react').subscribe((e) => {console.log(e)})
  }

  render() {
    return (
      <div>
        <p>{this.state.msg}</p>
        <button onClick={this.sendMsg.bind(this)}>发送消息</button>
      </div>
    )
  }
}
```

构造函数和官方api相同，接受两个参数，第一个是url, 第二个是options
