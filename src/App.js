import * as React from "react"

// TODO：createElement
// function App(props) {
//   // 测试访问 key 时，报错
//   console.log(props.key)
//   return <div>App works</div>
// }

// TODO：render
// function App(props) {
//   return <div>App works</div>
// }

// TODO：函数组件
function App(props) {
  React.useEffect(() => {
    console.log("useEffect")
  }, [])
  return <div>App works</div>
}

// TODO：类组件
// class App extends React.Component {
//   componentDidMount() {
//     console.log("componentDidMount")
//   }
//   render() {
//     return <div>class component</div>
//   }
// }

export default App
