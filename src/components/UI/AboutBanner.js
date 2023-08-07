import { Col, Row, Carousel, Button } from "antd";
import Image from "next/image";
import DrawingImage from "../../../public/image/storage/5.jpg";
import EagleImage from "../../../public/image/banner/pc-ge922de72c_1280.jpg";
import EagleImage1 from "../../../public/image//processor/1.jpg";
import EagleImage2 from "../../../public/image/motherboard/6.jpg";

const contentStyle = {
  height: "500px",
  color: "#000",
  width: "50%",
};

const AboutBanner = () => (
  <Carousel
    effect="fade"
    autoplay
    style={{ margin: "20px 0px", background: "black" }}
  >
    {/* slider-1 */}
    <div>
      <Row style={{ margin: "50px" }}>
        <Col
          lg={{
            span: 24,
          }}
          style={contentStyle}
        >
          <Image src={DrawingImage} fill alt="drawing_image" />
        </Col>
      </Row>
    </div>{" "}
    {/* slider-2 */}
    <div>
      <Row style={{ margin: "50px" }}>
        <Col
          lg={{
            span: 24,
          }}
          style={contentStyle}
        >
          <Image src={EagleImage1} fill alt="drawing_image" />
        </Col>
      </Row>
    </div>{" "}
    {/* slider-3 */}
    <div>
      <Row style={{ margin: "50px" }}>
        <Col
          lg={{
            span: 24,
          }}
          style={contentStyle}
        >
          <Image src={EagleImage2} fill alt="drawing_image" />
        </Col>
      </Row>
    </div>
    {/* slider-4 */}
    <div>
      <Row style={{ margin: "50px" }}>
        <Col
          lg={{
            span: 24,
          }}
          style={contentStyle}
        >
          <Image
            src={EagleImage}
            fill
            alt="eagle_image"
            style={{ grayScale: "-1" }}
          />
        </Col>
      </Row>
    </div>
  </Carousel>
);
export default AboutBanner;
