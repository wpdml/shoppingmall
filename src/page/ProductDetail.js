import React, { useEffect,useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null)

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/wpdml/shoppingmall/products/${id}`;
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    setProduct(data)
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return <Container className="detail">
    <Row>
        <Col>
        <div className="detail-img">
        <img src={product?.img}/>
        </div>
        </Col>
        <Col className="detail-info">
        <div>{product?.title}</div>
        <div>{product?.price}</div>
        </Col>
    </Row>
  </Container>;
};

export default ProductDetail;
