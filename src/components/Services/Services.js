import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FaHome, FaCar, FaHandsHelping } from "react-icons/fa";
import { MdAccessibility } from "react-icons/md";
import "./index.css";
import { Link } from "react-router-dom";

export const servicesData = [
  {
    id: "ahort_term_accommodation_and_assistance",
    icon: <FaHandHoldingHeart className="icon" />,
    title: "Short Term Accommodation and Assistance",
    description:
      "At our organization, we offer short-term accommodation and tailored support to NDIS participants and their families. Our mission is to ensure everyone has access to a welcoming and comfortable place they can call home.",
    detailContent: `## Short-Term Accommodation and Tailored Support for NDIS Participants

At our organization, we offer **short-term accommodation** and **tailored support** to NDIS participants and their families. Our goal is to provide a safe, comfortable, and accessible environment for individuals who need temporary care or support services. 

### Our Mission
We are committed to ensuring that everyone has access to a welcoming and comfortable place they can call home. Our mission is to create an environment where participants feel valued, supported, and empowered. Whether it’s for a short stay or temporary accommodation, we work closely with each individual to ensure their unique needs are met.

### Why Choose Our Short-Term Accommodation?
We understand that transitioning to a new living environment can be challenging, especially when specialized care is required. Our **short-term accommodation services** are designed to provide a seamless experience for NDIS participants, helping them feel at home while receiving personalized care and support.

#### Key Features:
- **Personalized care plans**: Tailored support to meet each participant’s specific needs and preferences.
- **24/7 assistance**: Round-the-clock support from qualified and compassionate staff members.
- **Comfortable and accessible environment**: Well-designed spaces that promote independence and ease of movement for participants.
- **Family support**: We ensure families are involved and informed throughout the stay, providing peace of mind and confidence in our services.

### Our Services
In addition to short-term accommodation, we also offer a variety of services that are tailored to the individual needs of each participant. These services include:

- **Assistance with daily living**: Helping with tasks such as personal hygiene, meal preparation, and housekeeping.
- **Community participation**: Encouraging and assisting participants to engage in social, recreational, and community activities.
- **Life skill development**: Offering training and support to build essential life skills such as budgeting, cooking, and personal care.
- **Physical and emotional support**: Providing care for mental well-being and promoting overall physical health.

### The Importance of a Comfortable Home Environment
A stable and nurturing environment is essential for the well-being of individuals with disabilities. We believe that providing **comfortable accommodation** is crucial in ensuring that participants feel safe, secure, and supported. Our short-term accommodation services are designed to allow participants to experience a sense of home while receiving the care and support they need.

### Our Commitment
At our organization, we are dedicated to improving the quality of life for people with disabilities. We work tirelessly to ensure that all participants feel respected, empowered, and able to live independently to the greatest extent possible.

Our commitment is not only to provide accommodation but also to create lasting positive changes in the lives of individuals and their families. We are proud to be part of their journey and will continue to support them every step of the way.

If you or your loved one are in need of short-term accommodation and personalized support, please don’t hesitate to contact us. We are here to help and ensure you or your family member feels at home.
`,
  },
  {
    id: "daily_living_assistance",
    icon: <MdAccessibility className="icon" />,
    title: "Daily Living Assistance",
    description:
      "Able Care is dedicated to assisting you with daily living tasks, both at home and in the community. Available 24/7, we're here to support you whenever you need it. We treat every participant like family, ensuring the highest quality of care.",
    detailContent: `## Daily Living Assistance

At **Able Care**, we are dedicated to assisting individuals with **daily living tasks**, whether it's at home or within the community. We understand that daily activities can sometimes become challenging, and we are here to offer personalized support whenever it's needed. Our mission is to ensure that you live as independently as possible while receiving the assistance and care you require.

### Available 24/7
Our services are available **around the clock**, 24 hours a day, 7 days a week. Whether you need help during the day or at night, we are always ready to assist you. Our dedicated team is here to support you in any way that suits your lifestyle and preferences, ensuring that you feel comfortable, safe, and well-cared for at all times.

### Comprehensive Support for Daily Living Tasks
Able Care is committed to providing **holistic support** to help you with a wide range of daily living tasks. Our services are tailored to meet the unique needs of each participant, promoting independence while providing assistance when required.

#### Key Areas of Assistance:
- **Personal care**: We provide help with daily tasks such as dressing, bathing, grooming, and personal hygiene, ensuring that participants feel refreshed and cared for.
- **Meal preparation**: Our team can assist with planning, shopping, and preparing nutritious meals, ensuring that you have access to healthy food at all times.
- **Household chores**: From light cleaning to laundry, we offer support with general housekeeping duties, keeping your living space neat and organized.
- **Medication management**: We help manage medications and ensure that they are taken as prescribed, giving you peace of mind knowing that your health is closely monitored.
- **Transportation**: Whether it’s getting to medical appointments, social activities, or shopping, we provide assistance with travel and mobility to ensure you stay connected to the community.

### Tailored Support to Fit Your Needs
At Able Care, we understand that no two individuals are the same, and therefore, the support we offer is always **person-centered**. We take the time to learn about your preferences, routines, and any specific requirements you may have. This allows us to create a customized care plan that best meets your needs and helps you achieve your goals.

### Treating You Like Family
We believe in creating a warm and caring environment, where each participant is treated like a member of our own family. Our team is compassionate, attentive, and genuinely invested in your well-being. We prioritize building strong, trusting relationships and always aim to make you feel comfortable, respected, and valued.

### The Highest Quality of Care
At Able Care, we take great pride in delivering the highest standards of care. We have a dedicated and professional team trained to provide the best possible support. Our goal is to help you maintain your independence and improve your overall quality of life, while always providing exceptional care and attention.

### Why Choose Able Care for Daily Living Assistance?
We are not just a service provider; we are your **partner in care**. Whether you need assistance on a regular basis or just for certain tasks, we’re here to help you live life on your terms. By choosing Able Care, you gain the support and reliability of a compassionate team who is always ready to assist you when needed most.

If you or your loved one needs daily living assistance, **Able Care** is here to help. Please don’t hesitate to reach out to us – we are just a phone call away, ready to provide the support you need.
`,
  },
  {
    id: "supported_independent_living",
    icon: <FaHome className="icon" />,
    title: "Supported Independent Living (SIL)",
    description:
      "At Able Care, we offer long-term accommodation and support for participants who require ongoing assistance. Our supported independent living (SIL) services are available either at the participant's home or within our dedicated facilities, tailored to meet individual needs.",
    detailContent: `## Supported Independent Living (SIL)

At **Able Care**, we are proud to offer **long-term accommodation** and **personalized support** for participants who require ongoing assistance. Our **Supported Independent Living (SIL)** services are designed to help individuals live as independently as possible while receiving the support they need. These services can be provided either at the participant's own home or within our specialized, purpose-built facilities.

### What is Supported Independent Living (SIL)?
Supported Independent Living (SIL) is a service designed to support individuals with disabilities to live independently in their community. The goal of SIL is to provide assistance while allowing participants to maintain control and make choices about their lives. We work with participants to create customized care plans that focus on **empowerment**, **independence**, and **personal growth**.

### Our SIL Services: Tailored to Your Needs
At Able Care, we understand that everyone’s needs are unique. That’s why our **SIL services** are tailored specifically to each participant. Whether it’s in their own home or in one of our dedicated care facilities, we provide the right level of support based on the individual’s preferences, routines, and goals.

#### Key Areas of Support:
- **Assistance with daily living tasks**: This includes help with personal care, meal preparation, laundry, and maintaining a clean living space.
- **Health and well-being**: We ensure that participants receive support with managing their health, including medication assistance, attending medical appointments, and promoting physical and mental well-being.
- **Community involvement**: SIL also emphasizes **community participation**. We assist individuals in engaging with local activities, socializing with peers, and contributing to their community, fostering a sense of belonging and inclusion.
- **Life skills development**: We provide programs to develop important life skills, such as budgeting, cooking, and managing personal finances, helping participants gain confidence and become more self-sufficient.

### Supported at Home or in Our Facilities
Whether a participant needs assistance in their own home or prefers to stay in a dedicated facility, we have flexible options to meet their needs:

- **At home**: Our team can provide support directly at the participant’s home, allowing them to remain in a familiar environment while receiving assistance.
- **In our facilities**: For those who prefer more structured support, we offer **specialized facilities** designed to meet the needs of individuals requiring SIL. These facilities offer a homely, comfortable atmosphere with access to professional care staff.

### The Importance of Independence
Our primary focus in delivering SIL services is to **support independence**. We believe in empowering participants to make decisions, take ownership of their daily routines, and enjoy an enriched life. Through SIL, participants are encouraged to engage in activities that build their skills and confidence, allowing them to live with dignity and pride.

### Why Choose Able Care for Supported Independent Living?
- **Personalized care plans**: We take time to understand the unique needs of each participant and develop a care plan that reflects their goals, preferences, and lifestyle.
- **Experienced and compassionate staff**: Our team of skilled professionals is dedicated to providing high-quality care with a focus on respect, empathy, and individual empowerment.
- **Flexible and supportive environment**: Whether at home or in our facilities, we offer flexible options to ensure the highest level of care and support.
- **24/7 support**: We offer round-the-clock care, ensuring that participants always have access to the support they need.

### Your Partner in Independent Living
At Able Care, we are committed to providing **quality care** and **support** to those who need it most. We believe that everyone deserves the opportunity to live independently and make their own choices. Our **SIL services** aim to give participants the confidence and skills they need to lead fulfilling, independent lives, while always ensuring they have the support they require.

If you or a loved one are looking for **long-term accommodation** and **personalized care**, our Supported Independent Living services are here to help. Contact us today to find out more about how we can support you in your journey toward greater independence.
`,
  },
  {
    id: "social_and_community_participation",
    icon: <IoIosPeople className="icon" />,
    title: "Social and Community Participation",
    description:
      "Are you ready to embrace life to the fullest and embark on new adventures? Able Care is here to support your passions and interests. Whether it’s joining a sport, enrolling in a course, spending time with friends, or exploring new activities, we’re dedicated to helping you stay engaged and connected!",
    detailContent: `## Social and Community Participation

At **Able Care**, we believe that life is meant to be fully embraced, and we are dedicated to supporting you in pursuing your passions and interests. Whether it’s participating in a sport, enrolling in a new course, spending time with friends, or discovering exciting new activities, we are here to help you stay engaged and connected with your community.

### Embrace Life to the Fullest
We understand that social and community participation plays a crucial role in an individual's overall well-being. It is not just about having fun, but also about creating meaningful connections, building confidence, and improving mental health. Our **Social and Community Participation** services are designed to encourage you to get involved in activities that bring joy and fulfillment to your life, helping you live each day to its fullest.

### Personalized Support for Your Interests
At Able Care, we understand that each person has unique interests and hobbies. That’s why we offer **personalized support** to help you engage in activities that are important to you. Whether it’s pursuing a new hobby, getting involved in community events, or taking part in educational or recreational activities, we are committed to supporting your journey.

#### Key Areas of Participation:
- **Sports and Physical Activities**: Whether it’s joining a local sports team, participating in adaptive sports, or simply enjoying outdoor activities, we help participants stay active and healthy.
- **Educational Opportunities**: We support individuals who wish to pursue further education, whether it's enrolling in a formal course, attending workshops, or learning new skills.
- **Social Engagement**: Spending time with friends and family is important. We assist with facilitating social gatherings, connecting with peers, and engaging in social outings.
- **Community Involvement**: We believe in fostering a sense of belonging within the community. Able Care helps participants participate in local events, volunteer activities, and other community-driven initiatives.
- **Creative and Leisure Activities**: Whether it’s joining a crafting class, attending a musical performance, or enjoying arts and culture, we support participants in discovering new leisure activities that bring joy and relaxation.

### Enhancing Mental and Emotional Well-being
Social participation doesn’t just help you stay physically active, but it also enhances mental and emotional well-being. Building friendships, engaging in fun activities, and contributing to your community can have a positive impact on your overall health. Our **Social and Community Participation** services are here to ensure that you not only live an active life but also one that’s emotionally rewarding.

### Tailored Support for Every Participant
We know that everyone has different needs and preferences. At Able Care, we offer **individualized care plans** that cater to your unique goals, helping you stay involved and connected. Whether you need assistance in transportation, guidance in selecting activities, or help with making arrangements, we’re here to ensure that you can access the opportunities that matter most to you.

### Why Choose Able Care for Social and Community Participation?
- **Personalized care**: We work closely with you to understand your interests and goals, ensuring that you get the support you need to engage in meaningful activities.
- **Flexibility and support**: Whether you’re looking for assistance to join a sports team, attend a local event, or simply spend time with friends, our team is always ready to help.
- **Fostering independence**: Our goal is to empower you to take part in social and community activities on your own terms, helping you develop new skills and gain confidence along the way.
- **Building lasting connections**: At Able Care, we believe in the power of social connection and strive to help you create lasting friendships and networks within your community.

### Join Us in Embracing Life’s Adventures
If you are ready to embrace life’s adventures and discover new passions, Able Care is here to support you every step of the way. Our **Social and Community Participation** services are designed to keep you engaged, connected, and empowered. We are committed to helping you explore new activities, make new friends, and live life to its fullest.

Reach out to us today to learn more about how we can help you get involved in your community and lead an active, fulfilling life.
`,
  },
  {
    id: "personal_care_and_life_skill_development",
    icon: <FaHandsHelping className="icon" />,
    title: "Personal Care and Life Skill development",
    description:
      "Able Care is dedicated to empowering participants to confidently manage daily tasks and make the most of community resources. We provide personalized training, educational opportunities, and skill development programs tailored to your needs.",
    detailContent: `## Personal Care and Life Skill Development

At **Able Care**, we are committed to empowering participants to confidently manage daily tasks and make the most of community resources. We offer personalized training, educational opportunities, and skill development programs designed to meet your specific needs and help you live as independently as possible.

### Empowering Independence Through Personal Care
Personal care is at the heart of leading an independent life. Able Care provides the support needed to help individuals manage their personal hygiene, daily routines, and essential tasks, promoting dignity and self-sufficiency. Whether it’s assistance with bathing, dressing, grooming, or meal preparation, our goal is to empower you to take control of your life and live confidently.

### Life Skills Development: Building Confidence for Everyday Tasks
In addition to personal care, we offer a variety of life skills development programs designed to help participants build the skills needed for daily living. Life skills are critical for independence, and by fostering these abilities, we aim to improve your quality of life and enhance your ability to navigate everyday challenges.

#### Key Life Skills Development Areas:
- **Household Management**: Learning to manage daily chores like cleaning, cooking, laundry, and organizing personal belongings is essential for a well-functioning home. We teach practical techniques and offer hands-on guidance to make these tasks manageable and efficient.
- **Budgeting and Money Management**: We provide training on financial management, including budgeting, saving, and understanding expenses. By developing money management skills, participants can gain greater control over their finances and make informed decisions about their future.
- **Time Management**: Effective time management helps individuals prioritize tasks, meet deadlines, and stay organized. We provide support in structuring daily routines and managing time effectively, allowing participants to make the most of each day.
- **Communication and Social Skills**: Developing strong communication skills is crucial for building meaningful relationships and navigating social situations. We provide guidance and support to help participants enhance their social skills and gain confidence when interacting with others.
- **Health and Well-being**: A key aspect of life skills development is maintaining physical and emotional well-being. We provide training in health management, including exercise routines, nutrition, and mental health strategies to ensure participants lead a balanced and healthy life.
- **Technology Skills**: In today’s digital world, technology plays an important role in daily tasks. We offer support in learning essential technology skills, such as using smartphones, computers, and the internet, which helps participants stay connected and access online resources.

### Personalized Training Tailored to You
At Able Care, we believe in the power of **individualized care**. Our programs are designed to meet the specific needs of each participant, ensuring that the skills being developed are relevant and beneficial to their daily lives. Our experienced staff work closely with participants to create personalized training plans, focusing on the areas that are most important to them.

### Why Choose Able Care for Personal Care and Life Skills Development?
- **Tailored support**: We work closely with you to understand your unique needs and create a personalized plan to help you achieve your goals.
- **Comprehensive life skills training**: Our programs cover all aspects of daily living, from personal care to time management, communication, and budgeting.
- **Focus on independence**: Our goal is to empower you to live independently, with the confidence to manage daily tasks and engage with your community.
- **Experienced and caring team**: Our dedicated staff are committed to providing high-quality care and support, with a focus on respect, dignity, and personal growth.
- **Holistic approach**: We believe in addressing all aspects of life skills development, ensuring that participants receive a well-rounded and enriching experience.

### Building Confidence, Independence, and Self-Sufficiency
At Able Care, we are passionate about helping individuals develop the skills they need to live their best lives. Our **Personal Care and Life Skills Development** programs are designed to enhance independence, build confidence, and improve overall well-being. We are here to support you every step of the way, providing personalized care that allows you to reach your fullest potential.

If you’re ready to take control of your daily tasks and develop valuable life skills, Able Care is here to help. Contact us today to learn more about how we can support you in your journey toward greater independence and confidence.
`,
  },
  {
    id: "assistance_with_travel_and_support",
    icon: <FaCar className="icon" />,
    title: "Assistance with Travel and Support",
    description:
      "Navigating public transportation for visits, work, or appointments can sometimes feel overwhelming. Able Care is here to support participants with independent travel and mobility by offering reliable travel and transportation assistance tailored to your needs.",
    detailContent: `## Assistance with Travel and Support

At **Able Care**, we understand that navigating public transportation or traveling independently can sometimes feel overwhelming, especially when you have important visits, work commitments, or medical appointments to attend. We are here to help ease that burden by providing **reliable travel and transportation assistance** tailored to meet your unique needs, ensuring that you can move with confidence and independence.

### Empowering Independent Travel
For many people with disabilities, the ability to travel independently is essential for maintaining a sense of autonomy and participating fully in daily life. Our **Assistance with Travel and Support** services are designed to help you navigate transportation options, whether it's public transport, private vehicles, or other means of mobility, so you can travel safely and confidently.

### Personalized Travel Support
We recognize that every individual has different needs and preferences when it comes to travel. At Able Care, we offer **personalized support** to ensure that your travel arrangements are as comfortable, accessible, and stress-free as possible. Our trained team members are available to assist you with any part of your journey, whether it's planning your route, providing guidance, or accompanying you during your travels.

#### Key Travel Assistance Services:
- **Route Planning**: Our team helps you plan the most efficient and accessible routes for your trips, taking into consideration your individual mobility needs and preferences.
- **Public Transport Support**: If you're using buses, trains, or other forms of public transportation, we can assist you with boarding, navigating stations, and making sure you reach your destination safely and on time.
- **Private Vehicle Assistance**: If you prefer to travel by car, we offer assistance with arranging transportation and accompanying you to ensure that you feel secure and comfortable during the journey.
- **Travel to Appointments**: Whether it's a medical appointment, work, or a personal commitment, we can help you get there on time and with minimal stress. Our team will provide transportation and support to ensure that you’re prepared and on track.
- **Mobility Aids**: If you require mobility aids such as a wheelchair or walking aid, we can ensure these are safely transported with you, providing the necessary support during your travels.
- **Community Engagement**: We assist you in getting to social events, community programs, or other activities, helping you stay connected with your peers and participate fully in your community.

### Enhancing Freedom and Independence
By providing assistance with travel, Able Care helps enhance your **freedom and independence**. We believe that mobility should never be a barrier to achieving your goals, whether they’re personal, social, or professional. Our team is here to provide the support you need to get where you need to go, on your own terms.

### Why Choose Able Care for Travel Assistance?
- **Tailored travel support**: Our services are customized to meet your specific needs, whether you need full assistance or just occasional support.
- **Reliable and safe transportation**: We prioritize your safety and comfort, ensuring that all aspects of your journey, from planning to arrival, are managed efficiently and securely.
- **Professional and caring team**: Our trained team members are committed to providing high-quality care and support, with a focus on your dignity, respect, and independence.
- **Flexibility and convenience**: Whether it’s a daily commute, an occasional trip, or a regular appointment, we offer flexible services to accommodate your schedule and needs.

### Helping You Stay Connected and Active
Being able to travel independently is essential for maintaining relationships, attending appointments, and staying active in the community. At Able Care, we believe in empowering individuals to take control of their mobility, helping you stay engaged with your personal, social, and professional life.

### Get Started Today
If you're ready to experience greater independence in your travel and mobility, Able Care is here to assist you every step of the way. Contact us today to learn more about our **Assistance with Travel and Support** services and how we can help you move confidently toward your goals.

`,
  },
];

const MyServices = () => {
  return (
    <div id="services" className="services">
      <div style={{ textAlign: "center" }}>
        <h2>Our Services</h2>
        <p>We provide a full range of services tailored to meet your needs.</p>
      </div>

      <div className="services-list">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div>
              {service.icon}
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>

            <Link className="link" to={`/services/${service.id}`}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
