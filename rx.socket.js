import io from "socket.io-client";
import { fromEvent, Observable } from 'rxjs'

export default class RxSocket {
  constructor(url, option) {
    this.socket = io.connect(url, option)
  }

  on(eventName) {
    return fromEvent(this.socket, eventName)
  }

  emit(type, ...data) {
    return Observable.create(obs => {
      this.socket.emit(type, ...data, (e) => {
        obs.next(e)
      })
    })
  }
}