// src/components/AboutUs.js
import React from "react";
import "./index.css";
import { ReactComponent as SvgImage } from "./draw.svg";
import { ReactComponent as GroupSVG } from "./groupPhotos.svg";

const AboutUs = () => {
  return (
    <section className="about-section" aria-labelledby="about-us">
      <section className="content">
        <h2>About Able Care</h2>
        <article className="about-container">
          <p>
            At Able Care, we are dedicated to provide high-quality,
            person-centered disability support services that empower individuals
            to live with dignity, independence, and confidence. Our mission is
            to create a supportive environment where people with disabilities
            receive tailored care that meets their unique needs and enhances
            their quality of life.
          </p>
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
        style={{ marginTop: "80px" }}
        className="content"
        aria-labelledby="Founders"
      >
        <h2>About Our Founders</h2>
        <article className="about-container">
          <p>
            Able Care was founded by two passionate healthcare professionals
            with extensive experience in the disability and healthcare sectors.
          </p>
          <p>
            One of our founders has worked as a physiotherapist in Australia,
            focusing on mobility, rehabilitation, and functional independence.
            With over five years of experience in the disability sector, they
            bring a deep understanding of the challenges faced by individuals
            with disabilities and are committed to enhancing their well-being
            through personalized support.
          </p>
          <p>
            Our other founder is a registered nurse currently working in a
            mental health hospital. With expertise in mental health and holistic
            care, they are dedicated to supporting individuals with complex
            needs, ensuring they receive compassionate, respectful, and
            comprehensive care.
          </p>
          <p>
            Together, we founded Able Care with a shared vision: to provide
            professional, reliable, and empathetic support that empowers
            individuals with disabilities to lead fulfilling lives. Our team is
            committed to delivering exceptional care that prioritizes
            independence, inclusion, and overall well-being.
          </p>
        </article>
      </section>

      <section
        style={{ marginTop: "80px" }}
        className="content"
        aria-labelledby="Our-Mission"
      >
        <h2>Our Mission</h2>
        <article className="about-container">
          <p>
            At Able Care, our mission is simple: to provide compassionate,
            person-centered care that enables individuals with disabilities to
            thrive. We believe in fostering an inclusive and supportive
            environment where everyone has the opportunity to achieve their
            goals, no matter how big or small.
          </p>
        </article>
      </section>

      <section
        style={{ marginTop: "80px" }}
        className="content"
        aria-labelledby="why-us"
      >
        <h2>Why Choose Able Care?</h2>
        <section className="goals_div_row" aria-labelledby="our-goal">
          <section className="goals_div_column_left">
            <div className="goal-card">
              <div>
                <h3>Experienced Team</h3>
              </div>
              <article>
                <p>
                  Our team is led by professionals with extensive experience in
                  disability care, physiotherapy, and mental health nursing.
                </p>
              </article>
            </div>
            <div className="goal-card">
              <h3>Person-Centered Approach</h3>
              <article>
                <p>
                  We tailor our services to meet the unique needs and goals of
                  each individual.
                </p>
              </article>
            </div>
          </section>

          <SvgImage className="svg-icon" />
          <section className="goals_div_column_right">
            <div className="goal-card">
              <h3>Holistic Support</h3>
              <article>
                <p>
                  From physical health to emotional well-being, we provide
                  comprehensive care that addresses all aspects of life.
                </p>
              </article>
            </div>
            <div className="goal-card">
              <h3>Commitment to Excellence</h3>
              <article>
                <p>
                  We are dedicated to delivering the highest standard of care,
                  ensuring that every individual feels valued and supported.
                </p>
              </article>
            </div>
          </section>
        </section>
      </section>
      <section
        style={{ textAlign: "center", marginTop: "20px", padding: "20px" }}
      >
        <p style={{ textAlign: "center", fontStyle: "italic" }}>
          <strong>
            "At Able Care, we are more than just a service provider—we are your
            partners in creating a life filled with possibilities. Let us walk
            this journey with you, every step of the way.""
          </strong>
        </p>

        <GroupSVG className="groupPicture" />
      </section>
    </section>
  );
};

export default AboutUs;
