import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [RouterLink], // Required for the "Back" button
  templateUrl: './course-detail.component.html'
})
export class CourseDetailComponent {
  // Logic: Angular automatically fills this with the ID from the URL
  id = input.required<string>(); 
}