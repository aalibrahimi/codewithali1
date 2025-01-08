"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormDataStore } from "../../components/serviceform";

const services = [
  {
    id: "teaching",
    name: "Coding Education",
    description: "Learn to code with personalized tutoring sessions",
    longDescription:
      "Transform your coding journey with our expert-led tutoring sessions. Whether you're a beginner or looking to advance your skills, our personalized approach ensures you learn at your own pace while mastering industry-standard practices.",
    route: "education",
    image: "/education.jpeg",
  },
  {
    id: "debugging",
    name: "Bug Fixing",
    description: "Get help with technical issues and bugs",
    longDescription:
      "Facing frustrating bugs or technical challenges? Our experienced developers will help identify and resolve issues efficiently, ensuring your project stays on track. We provide detailed explanations of solutions to prevent future occurrences.",
    route: "bugfix",

    image: "/bug.jpg",
  },
  {
    id: "consulting",
    name: "Technical Consulting",
    description: "Expert advice on your tech projects",
    longDescription:
      "Leverage our expertise to make informed decisions about your technology stack, architecture, and development processes. We provide strategic guidance to help you build scalable, maintainable solutions.",
    route: "techconsult",
    image: "/consulting.png",
  },
  {
    id: "development",
    name: "Custom Development",
    description: "Full application development services",
    longDescription:
      "From concept to deployment, we build custom applications tailored to your specific needs. Our full-stack development team ensures high-quality, scalable solutions using modern technologies and best practices.",
    route: "webdev",
    image: "webDev.png",
  },
];

export default function Services() {
  const router = useRouter();
  const { service, setService } = useFormDataStore();

  const goCourse = (servid: string, route: string) => {
    setService(servid);
    router.push(`/services/${route}`);
  };

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <section
        className="articles"
        style={{ flex: 1, maxWidth: "1400px", margin: "2rem auto" }}
      >
        {services.map((serv) => (
          <article
            key={serv.id}
            onClick={() => goCourse(serv.id, serv.route)}
            style={{ minHeight: "500px" }}
          >
            <div className="article-wrapper">
              <figure style={{ minHeight: "250px" }}>
                <img
                  src={serv.image}
                  alt={serv.name}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </figure>
              <div className="article-body">
                <h2>{serv.name}</h2>
                <p style={{ marginBottom: "1.5rem" }}>{serv.description}</p>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#666",
                    marginBottom: "1.5rem",
                  }}
                >
                  {serv.longDescription}
                </p>
                <a href="#" className="read-more">
                  Learn more <span className="sr-only">about {serv.name}</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section
        style={{
          textAlign: "center",
          padding: "3rem 0",
          background: "#f8f9fa",
          marginTop: "2rem",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Contact Us</h2>
        <Link
          href="/#contact"
          style={{
            display: "inline-block",
            padding: "1rem 2rem",
            background: "#df2727",
            color: "white",
            textDecoration: "none",
            borderRadius: "8px",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#bc3030")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#df2727")}
        >
          Get in Touch
        </Link>
      </section>

      <footer
        style={{
          textAlign: "center",
          padding: "2rem",
          background: "#333",
          color: "white",
          marginTop: "auto",
        }}
      >
        &copy; 2025 CodeWithAli. All rights reserved.
      </footer>
    </div>
  );
}
