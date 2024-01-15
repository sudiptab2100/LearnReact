import ListGroup from "./components/ListGroup";

function App() {
	let items = ["C1", "C2", "C3"];

	const handleItemSelect = (item: string) => {
		console.log(item);
	}

	return <div><ListGroup items={items} heading="Cs" onItemSelect={handleItemSelect}/></div>
}

export default App;