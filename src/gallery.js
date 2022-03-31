import { useNavigate } from 'react-router-dom';
import GalleryItems from './galleryItems';

const Gallery = (props) => {
	const navigate = useNavigate();
	return (
		<div
			className='gallery'
			onClick={(e) => {
				if (e.target.matches('.item img')) {
					props.changeTitle(e.target.nextSibling.innerText);
					props.changeIcon(<i className='fas fa-long-arrow-left'></i>);
					navigate(`/${e.target.nextSibling.innerText.toLowerCase()}`);
				} else if (e.target.matches('.item-name')) {
					props.changeTitle(e.target.innerText);
					props.changeIcon(<i className='fas fa-long-arrow-left'></i>);
					navigate(`/${e.target.innerText.toLowerCase()}`);
				}
			}}>
			<h2 className='gallery-title'>Women's Fashion Jewellery</h2>
			<div className='gallery-items'>
				{GalleryItems.map((item) => {
					return (
						<div key={item.title} className='item'>
							<img src={item.src} alt='' />
							<h3 className='item-name'>{item.title}</h3>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Gallery;
