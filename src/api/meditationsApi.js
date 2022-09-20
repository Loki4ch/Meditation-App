import fakeServerInstance from "./instance.js";

export const fetchMeditationsList = () => fakeServerInstance.get("/meditations");
