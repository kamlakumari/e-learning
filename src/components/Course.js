import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { myContext } from "../App";

const Course = () => {
  const coursesData =useContext(myContext)
  // const coursesData = [
  //   {
  //     id: 1,
  //     title: "Introduction to React",
  //     instructor: "John Doe",
  //     duration: "2 weeks",
  //     description:
  //       "Learn the basics of React framework and build interactive web applications.",
  //     imageUrl: "react.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "JavaScript Fundamentals",
  //     instructor: "Jane Smith",
  //     duration: "4 weeks",
  //     description:
  //       "Master the fundamentals of JavaScript programming language.",
  //     imageUrl: "javascript.png",
  //   },
  //   {
  //     id: 3,
  //     title: "HTML and CSS Basics",
  //     instructor: "David Johnson",
  //     duration: "3 weeks",
  //     description:
  //       "Learn the basics of HTML and CSS to create beautiful web pages.",
  //     imageUrl: "html.png",
  //   },
  //   {
  //     id: 3,
  //     title: "CSS",
  //     instructor: "David Johnson",
  //     duration: "3 weeks",
  //     description:
  //       "Learn the basics of HTML and CSS to create beautiful web pages.",
  //     imageUrl: "css.png",
  //   },
  //   {
  //     id: 20,
  //     title: "Database Fundamentals",
  //     instructor: "Emily Davis",
  //     duration: "4 weeks",
  //     description:
  //       "Get started with databases and learn about SQL and data management.",
  //     imageUrl: "database.png",
  //   },
  //     {
  //       id: 1,
  //       title: 'Java Programming Basics',
  //       instructor: 'John Doe',
  //       duration: '4 weeks',
  //       description: 'Learn the fundamentals of Java programming language and object-oriented programming.',
  //       imageUrl: 'java1.png',
  //     },
  //     {
  //       id: 2,
  //       title: 'Python for Data Science',
  //       instructor: 'Jane Smith',
  //       duration: '6 weeks',
  //       description: 'Explore Python programming language for data analysis and machine learning.',
  //       imageUrl: 'python1.png',
  //     },
  //     {
  //       id: 3,
  //       title: 'PHP Web Development',
  //       instructor: 'David Johnson',
  //       duration: '3 weeks',
  //       description: 'Learn PHP language for building dynamic websites and web applications.',
  //       imageUrl: 'php.png',
  //     },
  // ];

  return (
    <>
      <div>
        <h1>Course List</h1>
        <ul>
          <div className="row">
            {coursesData.map((data) => (
              <div class="col-md-3" style={{ width: "18rem" }}>
                <div className="card course_section">
                  <img height={100}
                    class="card-img-top"
                    src={"/img/" + data.imageUrl}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{data.title}</h5>
                    <p class="card-text">{data.description}</p>
                    <p>Duration : {data.duration}</p>
                    <a href="#" class="btn btn-primary">
                      View details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ul>
      </div>
    </>
  );
};

export default Course;
