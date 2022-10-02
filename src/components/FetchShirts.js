import React, { useEffect, useState } from "react";

const FetchShirts = () => {
    const [shirts, setShirts] = useState([])
    const fetchData = () => {
        return fetch("http://localhost:4001/shirts/")
              .then((response) => response.json())
              .then((data) => setShirts(data));
    }

    useEffect(() => {
        fetchData()
    }, [])  

  return (
    <div>
        <ul>
            <li>{shirts.shirt_name}</li>
        </ul>

    </div>
  )
}

export default FetchShirts;
