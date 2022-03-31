import Necklaces from './necklaces';

const NecklacesList = (props) => {
	if (props.item === 'Radhika Jewellers') return;
	return (
		<div className='items-list'>
			{Necklaces.map((item) => {
				return (
					<div key={item.img} className='card'>
						<img src={item.img} alt='' />
						<div className='info'>
							<h3 className='name'>{item.name}</h3>
							<h3 className='price'>{item.price}</h3>
						</div>
						<div className='btn-group'>
							<button className='minus'>-</button>
							<span className='nums'>1</span>
							<button className='plus'>+</button>
							<button className='add'>ADD</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default NecklacesList;
