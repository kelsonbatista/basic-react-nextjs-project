'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Loading from './loading';
import CourseSearch from './components/CourseSearch';
import Courses from './components/Courses';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const courses = await res.json();
      setCourses(courses);
      setIsLoading(false);
    }
    fetchCourses();
  }, []);

  return (
    <>
      <h1>Welcome to Traversy Media</h1>
      <CourseSearch getSearchResults={ (results) => setCourses(results) } />
      { isLoading ? <Loading /> : <Courses courses={ courses } /> }
    </> 
  )
}

export default Home
