---
layout: default
title: Training
---

# Overview

In the first version of the training, we tried to assemble all of the best resources
for learning to build simple web applications with Javascript. With our students, we noticed
that the bootcamp wasn't preparing them as well as it could have. We were
missing a big opportunity. Our students expressed that the training went for
breadth over depth. Rather than honing in on javascript, the meat of our curriculum,
a lot of time was spent on HTML and CSS which is an important but secondary
piece.

We strongly believe that learning should have context, and you should know what
your goals are.  Each section will address which learning objectives it will
cover. There's an
infinite amount of things you could spend your time learning, part of the value
of the training is that we can narrow the scope to only the most essential.  If
you can achieve fluency in these fundamental practices and patterns, we believe you'll flourish as
a software professional.

## Goals

One of the challenges in learning how to code is that you probably don't even
know what you're supposed to learn. When creating this curriculum, we had 4 goals
in mind.

  - **Full Stack**

  We'll present the full stack of technologies required to build a webapp from
  the ground up. We don't care if you use Jade or Markdown. The web is built on HTML
  and everyone should learn it. Whether NoSQL or SQL, understanding the
  fundamentals of schema design and SQL is crucial. Students shouldn't shy away
  from depth. How can you be a web developer without a proficiency in these
  skills?

  - **Linear Progression**

  The material is presented in order, going from web basics and computer
  basics, to version control, to programming, and then
  to databases and web frameworks. You learn the basics of code through Javascript
  and then finally move to NodeJS that builds upon the rest. Thus you start at
  the lowest level, the literal javascript the browser executes, and progress up
  through levels of abstraction until you finally get to the kitchen sink that
  is the MEAN Stack. As a beginner, don't try to learn frameworks without
  knowing basic programming. It's a disservice to your education.

  - **Curated Resources**

  There is such a plethora of amazing content on learning to code. We liked the
  consistency of going to a few sources that all shared common interfaces and
  learning patterns, like videos and interactive portions. So this isn't a
  complete list of all the resources, but more a curated list of what we think
  works well together (with lots of feedback from current fellows). We would love it if
  you submitted a github issue with more materials you've enjoyed.

  - **Language Agnosticism**

  In the end, programming is about abstractions and expressions. The mechanics
  of code are universal and exist in all modern languages, like python, ruby,
  and javascript. We teach Javascript because we love it. Thinking your language
  choice, especially as a beginner, matters, is like thinking that you can only
  write poetry in English and not in Spanish. Obviously the beauty of poetry is
  in rhyme and meter, in metaphor and simile, in cadence and rhythm, not in the
  king's English. Why should code be any different? At Andela, you're
  learning how to think, how to break problems down, how to express yourself,
  how to abstract ideas, and how to work together. We just learn that through
  Javascript  ¯\\\_(ツ)_/¯.

## Learning Objectives

The goal of this tutorial is to be able to do the following:

  1. Be comfortable navigating your development environment
  2. Understand where programming skills fit into the "web"
  3. Understand what pieces make up a web application
  4. Develop a level of comfort with the most common patterns in web development
  5. Understand version control and why it is used
  6. Have a basic understanding of HTML including forms
  7. Through NodeJS, Rails, or Django you should learn the following:
      * RESTful interfaces
      * HTTP
      * Routing
  8. Develop a comfort with basic SQL and/or NoSQL
  9. Have a basic understanding of an ORM, ActiveRecord
  10. Develop fullstack applications while leveraging popular technologies and libraries




# Curriculum Outline

## [Unit 1 - Javascript]()

Students learn fundamental concepts in programming including repls, methods, loops, variables, variable scope, conditionals, blocks and iterators, case statements, arrays, scope, hashes, regular expressions, iterators, enumerables, data structures, nesting, object oriented programming and prototyping, etc.... Topics build in complexity and provide the foundation for the rest of the course. Students learn to embrace error messages as clues and gain a fundamental appreciation for failure as the only way to learn and progress.

Deliverable: A solid foundation in Javascript, continued experience with git, enhanced problem-solving skills.

## [Unit 2 - JQuery and Code Patterns]()

Students begin exploring version control using git commands including with cloning, branching, merging, rolling back commits, forking, and submitting pull requests. We also learn explore the history of software development from Waterfall to Version control and discuss the historical significance of open sourced tools like Linux. They then learn how to manipulate the DOM more effectively using JQuery, and external data sources using AJAX. Students learn effective patterns like the Object Literal Pattern and methodologies like DRY(Dont Repeat Yourself).  They gain experience with Object Oriented Programming and understand how it allows programmers to bundle code and create reusable objects and methods, allowing for increasing complexity in software. They gain experience in debugging and tracking down issues in code. Labs during this period guide students in computational thinking.

Deliverable: Understanding of Jquery, and how to use external APIs using AJAX. Understanding of the Object Literal Pattern in Javascript. Experience reading and understanding unit tests

## [Unit 3 - AngularJS and Patterns]()

Students explore the world of AngularJS. They learn to appreciate good documentation for 3rd party libraries. They learn patterns like Dependency Injection and get introduced to the MVC(Model View Controller) pattern. They learn to write protractor tests for Angular applications.

Deliverable: Proficiency in AngularJS. TDD(Test Driven Development) with AngularJS using Protractor

## [Unit 4 - Databases, and Object Relational Mapping]()

Students learn about different types of Databases, SQL and NoSQL. ORM (Object Relational Mapping) allows programmers to query and manipulate data from a database using an object-paradigm. Students learn to write manipulate data using the Javascript language. We gain an appreciation for the structure of a database, how to map out tables, and the difference between the various table relationships. Students learn how to wireframe database structures, as well as how to link their applications to a database. This unit covers sql, domain modeling, relational database theory, schema architecture, and the Object Relational Model, including the ActiveRecord pattern.

Deliverable: Comprehension of database modeling and design, understanding of what an ORM is and it's powers, ability to integrate a Mongo/SQL database with an application

## [Unit 5 - NodeJS]()

This unit is designed to give students an understanding of the Hyper Text Transfer Protocol (HTTP), and how the Internet works, as implemented through the server side Javascript library, NodeJS. Students build their own HTTP Servers and learn how the request / response model of the web works. Their servers listen to HTTP requests and respond with well-formed HTML responses. They learn to understand the web with the few abstractions provided by the tool set.

Deliverable: A Node powered Javascript web application that integrates with models from the ORM unit to serve dynamically rendered HTML templates with data from a database. Server side TDD using Mocha and/or Jasmine

## [Unit 6 - REST & Express]()

Express is a  minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. With a myriad of HTTP utility methods and middleware predefined, creating a robust API is quick and easy.

Deliverable: A Node powered Javascript web application that uses express routes and middleware for its API methods. Server side TDD using Mocha and/or Jasmine

## [Unit 7 - Node Frameworks]()

A web application framework (WAF) is a software framework that is designed to support the development of dynamic websites, webapplications, web services and web resources. Students will learn how to leverage web frameworks like SailsJS and MEANjs to build fullstack applications.

Deliverable: MVP using Sails or MEAN

## [Unit 8 - Internal & Ghost Protocol]()

In the final weeks of training, students are required to build full stack internal tools that we use at Andela. They are also required to pair program with more senior developers on live or client projects like the Andela Website.

Deliverable: Pair programming mastery, Agile Development methodology mastery


# About

## Credits

First, we'd love to thank all the amazing people who created these source
materials. Most of it is from CodeSchool, with a bit from Zed
Shaw, and some from the people at Skillcrush. Obviously there are a lot more
resources out there for learning these topics. This guide is just my current
preferences and tries to put them in a linear fashion so skills can build upon
each other. Hope it helps someone. The biggest acknowledgement goes to the Flatiron School for their mentorship.
