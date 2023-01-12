import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import styles from "../styles/shortCarCard.module.css";

const ShortCarCard = (props) => {
  const { brand, model, transmission, power, price, photo } = props.vehicle;
  return;
  <div>
    <Container>
      <Row>
        <Col lg="6" md="6" sm="12">
          <div className={styles.vehicle_img}>
            <img src={photo} alt="" />
          </div>
        </Col>
        <Col lg="6" md="6" sm="12">
          <div className={styles.vehicle_title}>
            <h1>
              {brand} {model}
            </h1>
          </div>
          <div className={styles.vehicle_desc}>
            <h2>{transmission}</h2>
            <h2>{power}</h2>
            <h2>{price} Euro/km</h2>
          </div>
        </Col>
        <Col>
          <Form>
            <FormGroup className={styles.form_group}>
              <button className={styles.card_car_btn}>Detail</button>
            </FormGroup>
            <FormGroup className={styles.form_group}>
              <button className={styles.card_car_btn}>Book now</button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  </div>;
};
export default ShortCarCard;
