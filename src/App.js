function App() {
    const currDate = new Date();


  return (
    <div>
      <h1>Hello World, My name is Bob Marley</h1>
      <h2>Today is {currDate.toLocaleDateString()}, and the time now is {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}
export default App;