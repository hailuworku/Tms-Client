export interface Course {
  id: number;
  code: string;           // Matches C# 'Code'
  title: string;          // Matches C# 'Title'
  maxCapacity: number;    // Matches C# 'MaxCapacity'
  enrollmentCount: number; // Matches C# 'EnrollmentCount'
}