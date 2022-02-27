import React, { useState } from "react";
import {
    useParams
  } from "react-router-dom";
import BoxPage from "../BoxPage/BoxPage";

function BoxData() {
    const { id } = useParams();

    return (
        <div>
            <BoxPage id={id} />
        </div>
    );
}

export default BoxData;


 