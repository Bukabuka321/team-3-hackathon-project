import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import styles from "../styles/shortCarCard.module.css";
import Link from "next/link";
const ShortCarCard = () => {
  //add "props" as a parametr of function
  //const {id}=params.vehicle
  //const { brand, model, transmission, power, price, photo } = props.vehicle;
  const id = "1";
  const brand = "BMW";
  const model = "B3";
  const transmission = "automat";
  const power = "diesel";
  const price = "12";
  const photo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeS7vLnSDGMcfS27Adm_KIo7bMVT1xR4lvGCJA2oWPpeZ0c8Il_p6vFgJ5jz84QUFhd1g&usqp=CAU";
  return (
    <div className={styles.vehicle_card}>
      <Container>
        <Row>
          <Col>
            <div className={styles.vehicle_img}>
              <img src={photo} alt="" />
            </div>
          </Col>
          <Col>
            <div className={styles.vehicle_title}>
              <h1>
                {brand} {model}
              </h1>
            </div>
            <div className={styles.vehicle_inform}>
              <h2>{transmission}</h2>
              <h2>{power}</h2>
              <h2>{price} Euro/km</h2>
            </div>
            <div className={styles.btn_cont}>
              <Form>
                <FormGroup className={styles.form_group}>
                  <button className={styles.card_car_btn}>
                    <Link className={styles.link_btn} href={`/vehicles/${id}`}>
                      Detail
                    </Link>
                  </button>
                </FormGroup>
                <FormGroup className={styles.form_group}>
                  <button className={styles.card_car_btn}>
                    <Link className={styles.link_btn} href="/vehicles">
                      Book now
                    </Link>
                  </button>
                </FormGroup>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ShortCarCard;
