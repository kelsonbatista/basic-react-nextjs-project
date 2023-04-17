import { NextResponse } from 'next/server';
import courses from '../data.json';

export async function GET(request) {
  const { searchParams } = new URL(request.url); // vai pegar qualquer parametros da url
  const query = searchParams.get('query'); // vai pegar o parametro query da url
  
  const filteredCourses = courses.filter((course) => (course.title.toLowerCase().includes(query)));
  return NextResponse.json(filteredCourses);
}
