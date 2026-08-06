import { Component, inject } from '@angular/core';
import { EnrollmentStore } from '../../store/enrollment.store'; // የፋይሉ መንገድ ትክክል መሆኑን አረጋግጥ

@Component({
  selector: 'tms-dashboard-summary',
  standalone: true,
  templateUrl: './dashboard-summary.component.html',
 
})
export class DashboardSummaryComponent {
  // Storeን እዚህ ጋር inject እናደርጋለን
  readonly store = inject(EnrollmentStore);
}