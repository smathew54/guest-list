import { useState } from "react";
import { useEffect } from "react";
import useGuests from "./guests/useGuests";

const API_URL =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-ftb-ct-web-pt/guests";

export default function App() {
  const { selectedGuest, loading, error } = useGuests(API_URL);
  const [individualGuest, setIndividualGuest] = useState();
  console.log("I'm returning the guest list");
  console.log({ selectedGuest });

  const clickedGuest = (guest) => {
    console.log("selected guest:", guest.name);
    setIndividualGuest(guest)
  };

  function IndividualGuest() {
    if (!individualGuest) {
      return (
        <section className="details">
          <h4>Guest Details</h4>
          <p>Select a guest to learn more.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h4>{individualGuest.name}</h4>
        <h5>Contact Info</h5>
        <p>
          Phone Number:{individualGuest.phone} Email Address:{individualGuest.email}.
        </p>
        <address>{individualGuest.email}</address>
        <p>{individualGuest.bio}</p>
        <button onClick={() => setIndividualGuest(null)}>Go Back</button>
        </section>
    );
  }
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
                <th scope="col">name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              {selectedGuest.map((guest) => {
                return (
                  <tr key={guest.id} onClick={() =>clickedGuest(guest)}>
                    <td>{guest.name}</td>
                    <td>{guest.email}</td>
                    <td>{guest.phone}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <IndividualGuest/>
        </div>
      </main>
    </>
  );
}
