import { Col, Row, Carousel, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import DrawingImage from "../../../public/image/storage/5.jpg";
import EagleImage from "../../../public/image/banner/pc-ge922de72c_1280.jpg";
import EagleImage1 from "../../../public/image//processor/1.jpg";
import EagleImage2 from "../../../public/image/motherboard/6.jpg";
import Link from "next/link";

const contentStyle = {
  height: "425px",
  color: "#000",
};

const Banner = () => (
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
            span: 8,
          }}
        >
          <h1
            style={{ color: "white", fontFamily: "cursive", fontSize: "50px" }}
          >
            LET&apos;S BUILD
            <br />
            YOUR PC
          </h1>
          <div
            className="line"
            style={{
              height: "5px",
              margin: "20px 0",
              background: "white",
              width: "95%",
            }}
          ></div>

          <p
            style={{ color: "white", fontFamily: "cursive", fontSize: "20px" }}
          >
            Beauteous before up across felt sheepishly and more mournfully the
            wow so more flustered and one up pushed salamander collective
            blinked that iguanodon bid much some since hey far goodness jaguar
            whil...
          </p>
          <Link href="/processor">
            <p
              style={{
                fontSize: "15px",
                margin: "20px 0px",
                backgroundColor: "white",
                color: "black",
                width: "40%",
                padding: "0px 5px ",
                fontWeight: "800",
                letterSpacing: "3px",
              }}
            >
              Keep Reading <ArrowRightOutlined />
            </p>
          </Link>
        </Col>

        <Col
          lg={{
            span: 16,
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
            span: 8,
          }}
        >
          <h1
            style={{ color: "white", fontFamily: "cursive", fontSize: "50px" }}
          >
            TECHO-HUNT
            <br />
            FOR YOUR PC
          </h1>
          <div
            className="line"
            style={{
              height: "5px",
              margin: "20px 0",
              background: "white",
              width: "95%",
            }}
          ></div>

          <p
            style={{ fontSize: "20px", color: "white", fontFamily: "cursive" }}
          >
            Beauteous before up across felt sheepishly and more mournfully the
            wow so more flustered and one up pushed salamander collective
            blinked that iguanodon bid much some since hey far goodness jaguar
            whil...
          </p>
          <Link href="/processor">
            <p
              style={{
                fontSize: "15px",
                margin: "20px 0px",
                backgroundColor: "white",
                color: "black",
                width: "40%",
                padding: "0px 5px ",
                fontWeight: "800",
                letterSpacing: "3px",
              }}
            >
              Keep Reading <ArrowRightOutlined />
            </p>
          </Link>
        </Col>

        <Col
          lg={{
            span: 16,
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
            span: 8,
          }}
        >
          <h1
            style={{ color: "white", fontFamily: "cursive", fontSize: "50px" }}
          >
            MAKE YOUR PC
            <br />
            1-LEVEL UP
          </h1>
          <div
            className="line"
            style={{
              height: "5px",
              margin: "20px 0",
              background: "white",
              width: "95%",
            }}
          ></div>

          <p
            style={{ color: "white", fontFamily: "cursive", fontSize: "20px" }}
          >
            Beauteous before up across felt sheepishly and more mournfully the
            wow so more flustered and one up pushed salamander collective
            blinked that iguanodon bid much some since hey far goodness jaguar
            whil...
          </p>
          <Link href="/processor">
            <p
              style={{
                fontSize: "15px",
                margin: "20px 0px",
                backgroundColor: "white",
                color: "black",
                width: "40%",
                padding: "0px 5px ",
                fontWeight: "800",
                letterSpacing: "3px",
              }}
            >
              Keep Reading <ArrowRightOutlined />
            </p>
          </Link>
        </Col>

        <Col
          lg={{
            span: 16,
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
            span: 8,
          }}
        >
          <h1
            style={{ color: "white", fontFamily: "cursive", fontSize: "50px" }}
          >
            BUILD WITH
            <br />
            TECHO-HUNT
          </h1>
          <div
            className="line"
            style={{
              height: "5px",
              margin: "20px 0",
              background: "white",
              width: "95%",
            }}
          ></div>

          <p
            style={{ color: "white", fontFamily: "cursive", fontSize: "20px" }}
          >
            A spread opened patient and compulsively one placed seagull goodness
            python owing snapped yikes equitable when much the much Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Eligendi, tenetur!...
          </p>
          <Link href="/processor">
            <p
              style={{
                fontSize: "15px",
                margin: "20px 0px",
                backgroundColor: "white",
                color: "black",
                width: "40%",
                padding: "0px 5px ",
                fontWeight: "800",
                letterSpacing: "3px",
              }}
            >
              Keep Reading <ArrowRightOutlined />
            </p>
          </Link>
        </Col>

        <Col
          lg={{
            span: 16,
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
export default Banner;
