import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
// Import styles for your article page
import "./serviceDetails.css";
import { servicesData } from "./Services";

export const ServiceDetailPage = () => {
  const { id } = useParams();
  const service = servicesData.find((service) => service.id === id);
  return (
    <div className="article-container">
      <section className="article-body">
        <ReactMarkdown className="article-content">
          {service.detailContent}
        </ReactMarkdown>
      </section>
    </div>
  );
};
