import "./App.css";
import { puppyList } from "./data";
import { useState } from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log(puppyList);

  const featuredPop = puppies.find((pup) => pup.id === featPupId);

  return (
    <>
      {puppies.map((puppy) => {
        return (
          <p
            onClick={() => {
              setFeatPupId(puppy.id);
            }}
            key={puppy.id}
          >
            {" "}
            {/* end of ptag */}
            {puppy.name}
          </p>
        );
      })}

      <div>
        {featPupId && (
          <div>
            <h3>{featuredPop.name}</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{featuredPop.age}</li>
              <li>{featuredPop.isCute && "Cute"}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
