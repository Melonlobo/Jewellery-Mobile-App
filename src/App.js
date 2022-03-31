import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './navbar';
import { useState } from 'react';
import RingsList from './ringsList';
import BanglesList from './banglesList';
import EarringsList from './earringsList';
import BraceletsList from './braceletsList';
import NecklacesList from './necklacesList';
import AnkletsList from './ankletsList';

function App() {
	const [title, setTitle] = useState('Radhika Jewellers');
	const [icon, setIcon] = useState(<i className='fas fa-bars'></i>);
	return (
		<Router>
			<Navbar
				title={title}
				icon={icon}
				changeTitle={(title) => setTitle(title)}
				changeIcon={(icon) => setIcon(icon)}
			/>
			<Routes>
				<Route
					path='/'
					element={
						<Home
							changeTitle={(title) => setTitle(title)}
							changeIcon={(icon) => setIcon(icon)}
						/>
					}></Route>
				<Route path='/rings' element={<RingsList />}></Route>
				<Route path='/bracelets' element={<BraceletsList />}></Route>
				<Route path='/earrings' element={<EarringsList />}></Route>
				<Route path='/necklaces' element={<NecklacesList />}></Route>
				<Route path='/bangles' element={<BanglesList />}></Route>
				<Route path='/anklets' element={<AnkletsList />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
