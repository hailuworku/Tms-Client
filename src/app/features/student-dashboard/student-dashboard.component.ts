import { routes } from './../../app.routes';
import { Component, inject, signal, computed } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Course } from '../../models/course.model';
import { CourseCardComponent } from '../../ui/course-card/course-card.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  templateUrl: './student-dashboard.component.html',
  imports: [CourseCardComponent]
})
export class StudentDashboardComponent {
  // 1. Personal Logic (Logic from Exercise 1, Page 271)
  studentName = signal('Liya Kebede');
  earnedCredits = signal(45);

  // Derives graduation status from local credits signal
  graduationStatus = computed(() => 
    this.earnedCredits() >= 120 ? 'Eligible for Graduation' : 'In Progress'
  );

  // Method to update local signal
  selectedCourse = signal<Course | null>(null);

  registerForClass() {
    this.earnedCredits.update(v => v + 3);
  }

  // 2. API Logic (Logic from Exercise 6, Page 291)
  private courseService = inject(CourseService);
  private router = inject(Router);
  handleEnroll(course: Course) {
    console.log('Enrollment requested for:', course.title);
  this.selectedCourse.set(course);
  this.router.navigate(['/enroll']);
  }

  coursesResource = rxResource({
    stream: () => this.courseService.getCourses()
  });

  // Example of business logic computed from API data
  totalEnrollments = computed(() => {
    const data = this.coursesResource.value() ?? [];
    return data.reduce((acc: number, c: Course) => acc + c.enrollmentCount, 0);
  });
}