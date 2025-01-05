'use client'

// The useRouter hook should be imported from next/navigation
// and not next/router when using the App Router
import { useRouter } from "next/navigation";


export default function Courses() {
  const router = useRouter();

  return (
    <>
      <section className="courses" id="courses">
        <h2>Our Courses</h2>
        <div className="course-grid">
          <div className="course-card" onClick={() => router.push('/courses/python')}>
            <h3>Introduction to Python</h3>
            <p>
              Learn the basics of Python programming in this comprehensive
              course.
            </p>
          </div>
          <div className="course-card" onClick={() => router.push('/courses/webdev')}>
            <h3>Web Development Bootcamp</h3>
            <p>
              Master the fundamentals of web development with HTML, CSS, and
              JavaScript.
            </p>
          </div>
          <div className="course-card" onClick={() => router.push('/courses/datascience')}>
            <h3>Data Science with Python</h3>
            <p>
              Get started with data science and learn how to analyze data using
              Python.
            </p>
          </div>
          <div className="course-card" onClick={() => router.push('/courses/java-begin')}>
            <h3>Learning Java for Beginners</h3>
            <p>
              Once you feel like you have advanced in Python, it's time to take
              it up to the next level and learn the more advanced language,
              Java.
            </p>
          </div>
        </div>
      </section>
      <section className="contact">
        <h2>Contact Us</h2>
        <a className="btn-submit" href="/#contact">Click Here</a>
      </section>
      <footer>&copy; 2024 CodeWithAli. All rights reserved.</footer>
    </>
  );
}
