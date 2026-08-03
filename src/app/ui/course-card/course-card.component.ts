import { Component, input, output } from '@angular/core';
import { Course } from '../../models/course.model';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'tms-course-card',
  standalone: true,
  templateUrl: './course-card.component.html',
  imports: [RouterLink],
})
export class CourseCardComponent {
  // Receives data from Dashboard
  course = input.required<Course>();
  
  // Sends an event back to Dashboard
  enrollClicked = output<Course>();
}