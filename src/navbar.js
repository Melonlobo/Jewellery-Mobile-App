import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
	const navigate = useNavigate();
	return (
		<header className='App-header'>
			<div
				className='hamburger'
				onClick={(e) => {
					if (e.target.matches('.fa-long-arrow-left')) {
						navigate(-1);
						props.changeIcon(<i className='fas fa-bars'></i>);
						props.changeTitle('Radhika Jewellers');
					}
				}}>
				{props.icon}
			</div>
			<h1 className='title'>{props.title}</h1>
			<div id='nav'>
				<p id='search'>
					<i className='fas fa-search'></i>
				</p>
				<p id='notifications'>
					<i className='fas fa-bell'></i>
				</p>
				<p id='cart'>
					<i className='fas fa-shopping-cart'></i>
				</p>
			</div>
			<div id='notifications'></div>
			<div id='cart'></div>
		</header>
	);
};

export default Navbar;
