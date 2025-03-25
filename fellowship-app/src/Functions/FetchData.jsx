// import { API } from "@aws-amplify/api"; 
// import { API } from "@aws-amplify/api-rest"; 
import React, { useEffect, useState } from "react";
import * as API from "@aws-amplify/api-rest";
// import { API as AmplifyAPI } from "@aws-amplify/api-rest"
export default function FetchData(){
    console.log("FETCHING DATA");

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchItems = async () => {
          try {
            const data = await API.get("dfellowship", "/items");
            setItems(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          } finally {
            setLoading(false);
          }
        };
        fetchItems();
    }, []);

    console.log(items)
    // try {
    //     const data = await API.get("dfellowship", "/items");
    //     console.log(data);
    // } catch (error) {
    //     console.error("Error fetching data:", error);
    // }
}

