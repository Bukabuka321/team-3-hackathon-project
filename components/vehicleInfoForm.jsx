import React from "react";
import styles from "../styles/add_vehicle.module.css";

const VehicleInfoForm = () => {
    return (
        <>
            <form className={styles.addForm}>
                <label className={styles.infoRow}>
                    Type:
                    <input className={styles.itemValue} type="text" name="type" placeholder="vehicle type" />
                </label>
                <label className={styles.infoRow}>
                    Brand:
                    <input className={styles.itemValue} type="text" name="brand" placeholder="vehicle brand" />
                </label>
                <label className={styles.infoRow}>
                    Model:
                    <input className={styles.itemValue} type="text" name="model" placeholder="vehicle model" />
                </label>
                <label className={styles.infoRow}>
                    Year:
                    <input className={styles.itemValue} type="text" name="year" placeholder="vehicle year" />
                </label>
                <label className={styles.infoRow}>
                    Kilometrage:
                    <input className={styles.itemValue} type="number" name="kilometrage" placeholder="vehicle kilometrage" />
                </label>
                <label className={styles.infoRow}>
                    Comfort class:
                    <input className={styles.itemValue} type="text" name="comfort" placeholder="vehicle comfort class" />
                </label>
                <label className={styles.infoRow}>
                    Transmission:
                    <input className={styles.itemValue} type="text" name="transmission" placeholder="automatic / machanical" />
                </label>
                <label className={styles.infoRow}>
                    Power:
                    <input className={styles.itemValue} type="number" name="power" placeholder="electro / gas / hybrid" />
                </label>
                <label className={styles.infoRow}>
                    Seats:
                    <input className={styles.itemValue} type="number" name="seats" placeholder="number of seats" />
                </label>
                <label className={styles.infoRow}>
                    Photo:
                    <input className={styles.itemValue} type="text" name="photo" placeholder="add link here" />
                </label>
                <label className={styles.infoRow}>
                    Location:
                    <input className={styles.itemValue} type="text" name="location" placeholder="address" />
                </label>
                <label className={styles.infoRow}>
                    Price per km:
                    <input className={styles.itemValue} type="number" name="price" placeholder="price per km" />
                </label>
                <label className={styles.infoRow}>
                    Next technical inspection:
                    <input className={styles.itemValue} type="text" name="inspection" placeholder="months, year" />
                </label>
                <label className={styles.infoRow}>
                    IsAvailable:
                    <input className={styles.itemValue} type="text" name="IsAvailable" placeholder="yes / no" />
                </label>
            </form>
        </>
    )
}

export default VehicleInfoForm;
