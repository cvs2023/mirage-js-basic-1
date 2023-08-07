import React, { useEffect, useState } from "react";
import { createServer } from "miragejs";
import data from "./data.json";

createServer({
  routes() {
    this.get("/api/users", () => {
      return data; //imported data
    });
  },
});

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users?.map((i, index) => {
        return (
          <div key={index}>
            <div className="text-3xl">{i.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
