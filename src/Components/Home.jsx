import React from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";

import "bootstrap-icons/font/bootstrap-icons.css";

const Home = () => {
  return (
    <div>
      <marquee>Extra 10% off on Prepaid Orders</marquee>

      <div className="row">
        <div class="col-12 col-md-12 col-xl-12 col-lg-12">
          <Carousel>
            <Carousel.Item>
              <img
                src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-06102023-MainBannerDailyChanging-Z1-P2-avaasadnmx-min60%20(1).jpg "
                alt="imagesof"
                className="oneImg"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-06102023-MainBannerDailyChanging-Z1-P3-mnsgant-upto50.jpg"
                alt="imagesof2"
                className="oneImg"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-06102023-MainBannerDailyChanging-Z1-P6-AdidasoriginalsNike-min35.jpg"
                alt="imagesof3"
                className="oneImg"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-06102023-MainBannerDailyChanging-Z1-P7-laviebaggit-upto70.jpg"
                alt="imagesof4"
                className="oneImg"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
