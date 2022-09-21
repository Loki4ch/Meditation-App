import fakeServerInstance from "./instance.js";

export const fetchMeditationsList = () => fakeServerInstance.get("/meditations");

export const postMeditation = (data) => fakeServerInstance.post("/meditations", {data}, {headers: {"Content-Type": "application/json"}});
