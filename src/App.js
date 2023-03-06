export default App;
function Heading1() {
  return (
    <h1>I am heading one ... from first component</h1>
  )
}
function Heading2() {
  return (
    <h2>I am heading two ... from second component</h2>
  )
}
function Heading3() {
  return (
    <h3>I am heading three ... from third component</h3>
  )
}
function Button() {
  return (
    <button>click me!!</button>
  )

}

function App() {
  return (
    <div>
      <Heading1 />
      <Heading2 />
      <Heading3 />
      <Button />
    </div>
  )
}
