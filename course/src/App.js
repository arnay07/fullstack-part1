import React from 'react';

const Part = ({ name, exercises }) => (
  <>
    <p>
      {name} {exercises}
    </p>
  </>
);

const Header = ({ course }) => (
  <>
    <h1>{course.name}</h1>
  </>
);

const Content = ({ parts }) => (
  <>
    <Part name={parts[0].name} exercises={parts[0].exercises} />
    <Part name={parts[1].name} exercises={parts[1].exercises} />
    <Part name={parts[2].name} exercises={parts[2].exercises} />
  </>
);

const Total = ({ parts }) => (
  <>
    <p>
      Number of exercises{' '}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  </>
);

const App = () => {
  const course = {
    name: 'Half Stack Application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of component',
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default App;
