import React, {useState, useEffect} from "react";
import axios from 'axios';

const App = function () {
    const [users, setUsers] = useState(null);

    const [username,setUsername] = useState("");
    const [email, setEmail] = useState("");
    useEffect(() => {
        axios
          .get("/api/users")
          .then((users) => setUsers(users))
          .catch((err) => console.log(err));
    }, []);

    function submitForm() {
        if (username === ""){
            alert("Please fill the username field");
            return;
        }
        if (email === "") {
            alert("Please fill the email field");
            return;
        }
        axios
             .post("/api/users", {
                 username: username,
                 email: email,
             })
    }
}