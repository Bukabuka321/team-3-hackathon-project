import React from "react";
import { Form, FormGroup } from "reactstrap";
import styles from "../styles/search_car_form.module.css";

const SearchFormShort = () => {
    return (
        <Form className={styles.shortForm}>
            <div className={styles.search_form_short}>
                <div className={styles.topForm}>
                <FormGroup className={styles.form_group}>
                    <input type="text" placeholder="start location" required />
                </FormGroup>
                </div>
                <div className={styles.bottomForm}>
                <FormGroup className={styles.form_group}>
                    <input className={styles.pick_up_date} type="date" required />
                </FormGroup>
                <FormGroup className={styles.form_group}>
                    <input className={styles.return_date} type="date" required />
                </FormGroup>
                </div>
            </div>
        </Form>
    );
};
export default SearchFormShort;