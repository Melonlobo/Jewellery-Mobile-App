import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import imgAry from './carouselImgs';

const Carousel = () => {
	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	return (
		<motion.div className='carousel'>
			<motion.div
				drag='x'
				dragConstraints={{ right: 0, left: -width }}
				ref={carousel}
				className='inner-carousel'>
				{imgAry.map((img) => {
					return (
						<motion.div key={img.src} className='carousel-img'>
							<img id={img.id} src={img.src} alt='' />
						</motion.div>
					);
				})}
			</motion.div>
		</motion.div>
	);
};

export default Carousel;
