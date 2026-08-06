import { Component, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { CourseService } from '../../services/course.service';
import { CourseCardComponent } from '../../ui/course-card/course-card.component';
import { DashboardSummaryComponent } from '../dashboard-summary/dashboard-summary.component';
import { EnrollmentListComponent } from '../enrollment-list/enrollment-list.component';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  templateUrl: './student-dashboard.component.html',
  imports: [CourseCardComponent]
})
export class StudentDashboardComponent {
  studentName = signal('Liya Kebede');
  earnedCredits = signal(45);
  graduationStatus = computed(() => this.earnedCredits() >= 120 ? 'Eligible' : 'In Progress');

  private courseService = inject(CourseService);
  private router = inject(Router);

  coursesResource = rxResource({
    // እዚህ ጋር ስሙን ወደ 'getCourses()' መልሰነዋል!
    stream: () => this.courseService.getCourses() 
  });

  registerForClass() { this.earnedCredits.update(v => v + 3); }
  handleEnroll(course: any) { this.router.navigate(['/enroll']); }
}