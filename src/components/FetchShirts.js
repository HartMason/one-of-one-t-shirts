import React, { useEffect, useState } from "react";

const FetchShirts = () => {
  const [shirts, setShirts] = useState([]);
  const fetchData = async () => {
    return await fetch("http://localhost:4001/shirts/")
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA DATA", data);
        setShirts(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {shirts.map((shirt) => (
          <div>
            <li>{shirt.shirt_name}</li>
            <li>{shirt.shirt_id}</li>
            <li>{shirt.shirt_price}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default FetchShirts;
