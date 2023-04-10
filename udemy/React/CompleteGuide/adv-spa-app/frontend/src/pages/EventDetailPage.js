import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetailPage = () => {
  const params = useParams();

  return (
    <div>
      <h1>EventDetailPage</h1>
      {params.eventId}
    </div>
  );
};

export default EventDetailPage;