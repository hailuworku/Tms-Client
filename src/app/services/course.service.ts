import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course.model';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private http = inject(HttpClient);
  private url = 'http://localhost:5158/api/v1/courses'; // Ensure this matches your .NET port

  // Fetch all courses from Postgres via .NET
  getCourses() {
  // Use <any> instead of <Course[]> or <any[]> here
  return this.http.get<any>(this.url).pipe(
    map(response => {
      // If .NET returns PagedResponse { items: [], totalCount: 25 }
      if (response.items) return response.items;
      // If .NET returns V2 Envelope { data: [], meta: {} }
      if (response.data) return response.data;
      // Default fallback
      return response;
    })
  );
}
}