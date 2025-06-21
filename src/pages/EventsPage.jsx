import React from "react";
import { CalendarDays, MapPin } from "lucide-react";

const events = [
  {
    title: "Gurgaon Property Expo 2025",
    date: "July 10, 2025",
    location: "DLF CyberHub, Gurgaon",
    image: "/assets/CyberHub.jpg",
    description: "Explore 100+ new projects from top builders with exclusive launch offers.",
  },
  {
    title: "Online Webinar: Property Investment Tips",
    date: "August 2, 2025",
    location: "Online Zoom Webinar",
    image: "/assets/event2.jpg",
    description: "Join industry experts to learn how to invest smartly in 2025.",
  },
  {
    title: "Site Visit: KKP Heights Noida",
    date: "August 18, 2025",
    location: "Sector 150, Noida",
    image: "/assets/Noida1.webp",
    description: "Free pick-up & drop service for interested buyers. Book now!",
  },
];

function EventPage() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-5">Upcoming Events</h2>
        <div className="row">
          {events.map((event, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{event.title}</h5>
                  <p className="text-muted small mb-1">
                    <CalendarDays size={16} className="me-1" /> {event.date}
                  </p>
                  <p className="text-muted small mb-2">
                    <MapPin size={16} className="me-1" /> {event.location}
                  </p>
                  <p className="card-text small">{event.description}</p>
                  <a href="#" className="btn btn-outline-primary btn-sm mt-2">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventPage;
