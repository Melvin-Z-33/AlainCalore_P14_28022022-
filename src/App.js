import './style/App.css';
import { Routes, Route } from 'react-router-dom';
import EmployeeList from './view/EmployeeList.jsx';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<EmployeeList />} />
			</Routes>
		</div>
	);
}

export default App;
