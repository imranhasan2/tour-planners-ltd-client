 import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
          <Carousel
        className="text-center"
        autoPlay
        interval={3000}
        infiniteLoop
        stopOnHover={false}

    
        >
                <div>
                    <img src="https://www.tour-planners.com/uploads/vQQGEINJjArZ.jpg" />
                   
                </div>
                <div>
                    <img src="https://www.tour-planners.com/uploads/CjxOjTY6NJF2.jpg" />
                
                </div>
                <div>
                    <img src="https://www.tour-planners.com/uploads/L8hRjUBy3swP.jpg" />
                    
                </div>
                 <div>
                    <img src="https://www.tour-planners.com/uploads/lgbI97jIyAvZ.jpg" />
                   
                </div>
                <div>
                    <img src="https://www.tour-planners.com/uploads/qudEMYzm4fgn.jpg" />
                
                </div>
                
            </Carousel>
    );
};

export default Banner;