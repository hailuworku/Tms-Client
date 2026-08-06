import { Component, inject } from '@angular/core'; // 1. 'inject' እዚህ መኖሩን አረጋግጥ
import { EnrollmentStore } from '../../store/enrollment.store'; // 2. ስቶሩን ኢንፖርት አድርግ
import { AnalyticsChartComponent } from '../../ui/analytics-chart/analytics-chart.component';

@Component({
  selector: 'app-instructor-dashboard',
  standalone: true,
  imports: [AnalyticsChartComponent], 
  templateUrl: './instructor-dashboard.component.html'
})
export class InstructorDashboardComponent {
  
  store = inject(EnrollmentStore); 

}