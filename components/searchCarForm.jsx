import React from "react";
import { Form, FormGroup } from "reactstrap";
import styles from "../styles/search_car_form.module.css";

const SearchCarForm = () => {
  return (
    <Form>
      <div className={styles.search_form}>
        <FormGroup className={styles.form_group}>
          <input type="text" placeholder="start location" required />
        </FormGroup>
        <FormGroup className={styles.form_group}>
          <input type="text" placeholder="end location" required />
        </FormGroup>
        <FormGroup className={styles.form_group}>
          <input className={styles.pick_up_date} type="date" required />
        </FormGroup>
        <FormGroup className={styles.form_group}>
          <input className={styles.return_date} type="date" required />
        </FormGroup>
        <FormGroup className={styles.form_group}>
          <input type="number" placeholder="minimum price" />
        </FormGroup>
        <FormGroup className={styles.form_group}>
          <input type="number" placeholder="maximum price" />
        </FormGroup>
        <FormGroup className={styles.form_group}>
          <button className={styles.find_car_btn}>Book now</button>
        </FormGroup>
      </div>
    </Form>
  );
};
export default SearchCarForm;
