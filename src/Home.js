import Carousel from './carousel';
import Gallery from './gallery';
import Foot from './foot';

const Home = (props) => {
	return (
		<div className='home'>
			<Carousel />
			<Gallery changeTitle={props.changeTitle} changeIcon={props.changeIcon} />
			<Foot />
		</div>
	);
};

export default Home;
