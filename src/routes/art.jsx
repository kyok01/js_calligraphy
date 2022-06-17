import React from "react";
import { useParams } from 'react-router-dom'

export const Art = () => {
    const {artId} = useParams();
    return <h3>art {artId}</h3>
}