import Alert from "./Components/Alert";
// import ListGroup from "./Components/ListGroup";

function App() {
  // let items = ["Mumabi", "Delhi", "Pune", "Bangalore", "Gurgaon"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  return (
    <div>
      <Alert>Hello <span>World</span></Alert>
      {/* <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}

export default App;
