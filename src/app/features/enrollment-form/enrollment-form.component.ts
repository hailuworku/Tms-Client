import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormArray, FormControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink], 
  templateUrl: './enrollment-form.component.html'
})
export class EnrollmentFormComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  submitted = signal(false);

  form = this.fb.nonNullable.group({
    studentId: ['', [Validators.required, Validators.pattern(/^STU-[0-9]{4}$/)]],
    courseId: ['', Validators.required],
    term: ['Fall 2026', Validators.required],
    // ይህ ለዲናሚክ ክፍሉ በጣም አስፈላጊ ነው
    backupCourses: this.fb.array<FormControl<string>>([]) 
  });

  
  get backups() {
    return this.form.controls.backupCourses;
  }

 
  addBackup() {
    this.backups.push(
      this.fb.control("", { nonNullable: true, validators: Validators.required })
    );
  }

  
  removeBackup(index: number) {
    this.backups.removeAt(index);
  }

  onSubmit() {
    if (this.form.valid) {
      // .getRawValue() ሁሉንም ዳታ (Disabled ጭምር) ያመጣል
      console.log('Valid Payload:', this.form.getRawValue());
      this.submitted.set(true);
    } else {
      this.form.markAllAsTouched();
    }
  }
}