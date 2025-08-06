import { useState } from "react";
import { useEffect } from "react";
import GetGuests from "./guests/GetGuests";

const API_URL =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-ct-web-pt/guests";

export default function App() {
  const [selectedGuest, setSelectedGuest] = useState([]);

  const { guestList, loading, error } = GetGuests(API_URL);

  //this is to render the HTML
  return (
    <>
      <header>
        <h1>Guest List</h1>
      </header>
      <main>
        <div className="styleTable">
          {" "}
          <table className="innerTable">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              {/* {guestList.map =((element) => (console.log(element)))}
              <td></td> */}
            </tbody>
          </table>
        </div>
        <div></div>
      </main>
    </>
  );
}