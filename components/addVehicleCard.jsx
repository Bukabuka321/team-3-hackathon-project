import React from "react";
import styles from "../styles/add_vehicle.module.css";
import VehicleInfoForm from "./vehicleInfoForm";

const AddVehicleCard = () => {
    return (
        <>
            <div className={styles.main}>
                <h3 style={{ fontWeight: "400" }}> Add a new vehicle </h3>
                    <VehicleInfoForm />
                <button className={styles.addBtn} type="submit" value="Submit">Add</button>
            </div>
        </>
    )
}

export default AddVehicleCard;