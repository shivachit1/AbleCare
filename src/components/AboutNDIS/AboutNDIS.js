// src/components/AboutUs.js
import React from "react";
import "./index.css";
import { ReactComponent as Pic2 } from "./pic2.svg";

const AboutNDIS = () => {
  const scrollToElement = () => {
    const element = document.getElementById("footer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="about_ndis" aria-labelledby="about-us">
      <section className="about_ndis_content">
        <h2>About NDIS</h2>
        <article className="about_ndis_container">
          <p>
            The National Disability Insurance Scheme (NDIS) is an Australian
            government initiative designed to provide long-term, individualized
            support for people with disabilities. Established in 2014, with full
            implementation planned for 2018, the NDIS covers all reasonable and
            necessary support costs, ensuring participants receive the care they
            need to lead fulfilling lives. At its core, the NDIS empowers
            individuals by giving them greater choice and control over their
            support. Eligible participants receive funding tailored to their
            specific needs, long-term goals, and aspirations. This funding
            allows individuals to access essential services and resources that
            enhance their health, well-being, and overall quality of life. Able
            care is dedicated to implementing the NDIS, supporting thousands of
            Australians with significant disabilities, along with their families
            and caregivers. Through the NDIS, individuals gain access to a
            variety of support programs, allowing them to allocate funding in
            ways that best suit their needs.
          </p>
        </article>

        <article className="about_ndis_container">
          <h3>How Does the NDIS Work?</h3>
          <p>
            The NDIS ensures that funding goes directly to the individuals who
            need it, enabling them to choose their preferred service providers.
            Because every person has unique requirements, the NDIS develops
            personalized plans based on their needs and progress goals.
          </p>
          <ul>
            <p>
              Support services under the NDIS cover various aspects of life,
              including:
            </p>
            <li>
              <strong>Housing & Accommodation</strong> – Assistance with finding
              and maintaining suitable living arrangements
            </li>
            <li>
              <strong>Employment Support </strong> – Helping individuals achieve
              workplace independence
            </li>
            <li>
              <strong>Daily Living & Independence</strong> – Support with
              essential life skills and tasks
            </li>
            <li>
              <strong>Community & Social Participation</strong> – Encouraging
              engagement in social and recreational activities
            </li>
            <li>
              <strong>Allied Health Services</strong> – Access to crucial
              healthcare and therapeutic services
            </li>
          </ul>
        </article>
        <article className="about_ndis_container">
          <h3>Navigating the NDIS with Confidence</h3>
          <p>
            Do NDIS-related terms feel overwhelming? Whether you're using the
            NDIS for yourself or a loved one, understanding key terms and
            support options is essential for making informed decisions. With the
            right knowledge, you can select the best support programs to meet
            your unique needs. Able care is here to guide you through the
            process, ensuring you maximize the benefits of your NDIS plan.
          </p>
        </article>

        <div className="about_ndis_hero_section">
          <div className="about_ndis_hero_section_content">
            <h2 style={{ textAlign: "left" }}>Who is eligible?</h2>
            <p style={{ marginTop: "10px" }}>
              To be eligible for the NDIS, you must meet the following criteria:
            </p>

            <article style={{ marginTop: "10px" }}>
              <ul>
                <li>
                  <strong>Age:</strong> Between 9 and 65 (Children under 9 may
                  receive early support)
                </li>
                <li>
                  <strong>Residency:</strong> Australian citizen, permanent
                  resident, or Protected Special Category Visa holder living in
                  Australia.
                </li>
                <li>
                  <strong>Disability:</strong> Have a permanent impairment
                  requiring disability-specific support.
                </li>
                <li>
                  <strong>Early Intervention:</strong>Need support now to reduce
                  future needs or help your family build skills.
                </li>
              </ul>
            </article>

            <div style={{ marginTop: "20px" }}>
              <h3 style={{ textAlign: "left" }}>Need Help with NDIS?</h3>
              <p style={{ marginTop: "10px" }}>
                Navigating the NDIS can feel overwhelming, but we're here to
                guide you every step of the way. Let us answer your questions
                and simplify the process for you.
              </p>

              <button
                className="link"
                style={{ marginTop: "20px" }}
                onClick={scrollToElement}
              >
                Contact Us
              </button>
            </div>
          </div>

          <Pic2 className="about_ndis_hero_section_icon" />
        </div>
      </section>
    </section>
  );
};

export default AboutNDIS;
