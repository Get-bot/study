import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  const response = useLoaderData();
  const events = response.events;
  
  return <>{<EventsList events={events} />}</>;
};

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw json({ message: "Could not fetch events." }, { status: response.status});
  } else {
    return response;
  }
};
