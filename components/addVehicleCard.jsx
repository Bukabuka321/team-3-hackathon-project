import React from "react";
import styles from "../styles/add_vehicle.module.css";

const AddVehicleCard = () => {
    return (
        <>
            <div className={styles.main}>
                <h3 style={{ fontWeight: "400" }}> Add a new hehicle </h3>
                    <form className={styles.addForm}>
                        <label className={styles.infoRow}>
                            Type:
                        <input className={styles.itemValue} type="text" name="name" placeholder="vehicle type" />
                        </label>
                    <label className={styles.infoRow}>
                        Brand:
                        <input className={styles.itemValue} type="text" name="name" placeholder="vehicle brand" />
                    </label>
                    <label className={styles.infoRow}>
                        Model:
                        <input className={styles.itemValue} type="text" name="name" placeholder="vehicle model" />
                    </label>
                    <label className={styles.infoRow}>
                        Year:
                        <input className={styles.itemValue} type="text" name="name" placeholder="vehicle year" />
                    </label>
                    <label className={styles.infoRow}>
                        Kilometrage:
                        <input className={styles.itemValue} type="text" name="name" placeholder="vehicle kilometrage" />
                    </label>
                    <label className={styles.infoRow}>
                        Comfort class:
                        <input className={styles.itemValue} type="text" name="name" placeholder="vehicle comfort class" />
                    </label>
                    <label className={styles.infoRow}>
                        Transmission:
                        <input className={styles.itemValue} type="text" name="name" placeholder="automatic / machanical" />
                    </label>
                    <label className={styles.infoRow}>
                        Power:
                        <input className={styles.itemValue} type="text" name="name" placeholder="electro / gas / hybrid" />
                    </label>
                    <label className={styles.infoRow}>
                        Seats:
                        <input className={styles.itemValue} type="text" name="name" placeholder="number of seats" />
                    </label>
                    <label className={styles.infoRow}>
                        Photo:
                        <input className={styles.itemValue} type="text" name="name" placeholder="" />
                    </label>
                    <label className={styles.infoRow}>
                        Location:
                        <input className={styles.itemValue} type="text" name="name" placeholder="address" />
                    </label>
                    <label className={styles.infoRow}>
                        Location:
                        <input className={styles.itemValue} type="text" name="name" placeholder="address" />
                    </label>
                    <label className={styles.infoRow}>
                        Price per km:
                        <input className={styles.itemValue} type="text" name="name" placeholder="price per km" />
                    </label>
                    <label className={styles.infoRow}>
                        Next technical inspection:
                        <input className={styles.itemValue} type="text" name="name" placeholder="months, year" />
                    </label>
                    <label className={styles.infoRow}>
                        IsAvailable:
                        <input className={styles.itemValue} type="text" name="name" placeholder="yes / no" />
                    </label>
                    </form>
                <button className={styles.addBtn} type="submit" value="Submit">Add</button>
            </div>
        </>
    )
}

export default AddVehicleCard;