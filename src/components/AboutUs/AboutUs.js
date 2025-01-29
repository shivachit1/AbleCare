// src/components/AboutUs.js
import React from "react";
import "./index.css";
import { ReactComponent as SvgImage } from "./draw.svg";

const AboutUs = () => {
  return (
    <section className="about-section" aria-labelledby="about-us">
      <section className="content">
        <h2>About Us</h2>
        <article className="about-container">
          <p>
            We are a leading provider of comprehensive care services for elderly
            individuals, people with disabilities, and anyone in need of
            personalized support. Our dedicated team is passionate about
            offering the highest quality care tailored to each individual’s
            specific needs. Whether it’s assistance with daily activities,
            mobility support, or help with healthcare management, we are here to
            provide compassionate care that promotes independence and dignity.
          </p>
          <p>
            Our care services extend beyond just physical support; we also
            strive to nurture emotional wellbeing, mental health, and overall
            comfort. By understanding the unique needs of each individual, we
            create care plans that allow our clients to continue enjoying a high
            quality of life while ensuring their safety and comfort.
          </p>
          <p>
            We are committed to building strong relationships with families and
            caregivers, ensuring clear communication and collaborative care.
            Whether you are looking for in-home care or residential care, our
            team is here to support you every step of the way. Join the
            countless families who trust us with their loved ones' care and
            experience the difference in compassionate service.
          </p>
        </article>
      </section>

      <section
        style={{ marginTop: "150px" }}
        className="content"
        aria-labelledby="why-us"
      >
        <h2>What Makes Us Different</h2>
        <section className="goals_div_row" aria-labelledby="our-goal">
          <section className="goals_div_column_left">
            <div className="goal-card">
              <div>
                <h3>We Care</h3>
              </div>
              <article>
                <p>
                  We care for those in need, sharing your emotions, comfort, and
                  well-being.
                </p>
              </article>
            </div>
            <div className="goal-card">
              <h3>We Connect</h3>
              <article>
                <p>
                  We connect with you, understand your needs, and strive to
                  deliver the best.
                </p>
              </article>
            </div>
          </section>

          <SvgImage className="svg-icon" />
          <section className="goals_div_column_right">
            <div className="goal-card">
              <h3>We support</h3>
              <article>
                <p>
                  We help you create a lifestyle based on your choices. You can
                  trust us with anything.
                </p>
              </article>
            </div>
            <div className="goal-card">
              <h3>We Build</h3>
              <article>
                <p>
                  We build lasting relationships and improve quality of life.
                </p>
              </article>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default AboutUs;
