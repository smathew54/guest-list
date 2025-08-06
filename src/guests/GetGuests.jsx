import React from 'react'
import { useEffect, useState } from "react";

export default function GetGuests(API_URL) {
    const [selectedGuest, setSelectedGuest] = useState([]);
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const getGuestList = async () => {
            try {
                const result = await fetch(API_URL)
                const data = await result.json()
                console.log(data);
                setSelectedGuest(data.data);
            } catch (error) {
                console.error(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        getGuestList();
    }, [API_URL]);

    //this is the html return
    return { selectedGuest, loading, error };
}
