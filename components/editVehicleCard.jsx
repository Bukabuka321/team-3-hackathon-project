import React from "react";
import styles from "../styles/add_vehicle.module.css";
import VehicleInfoForm from "./vehicleInfoForm";

const EditVehicleCard = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.top}>
                    <h3 style={{ fontWeight: "400", fontSize: "1.2em" }}> Edit a vehicle </h3>
                    <button className={styles.deleteBtn} type="submit" value="Submit">Delete vehicle</button>
                </div>
                <VehicleInfoForm />
                <button className={styles.addBtn} type="submit" value="Submit">Edit</button>
            </div>
        </>
    )
}

export default EditVehicleCard;