import { computed, inject } from '@angular/core';
import { signalStore, withComputed, withMethods, patchState, withState } from '@ngrx/signals'; // withState እዚህ መኖሩን አረጋግጥ
import { withEntities, setAllEntities, updateEntity } from '@ngrx/signals/entities'; // updateEntity እዚህ መኖሩን አረጋግጥ
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap, catchError, EMPTY, concatMap } from 'rxjs';
import { EnrollmentService } from '../services/enrollment.service';
import { Enrollment } from '../models/enrollment.model';

export const EnrollmentStore = signalStore(
  { providedIn: 'root' },
  withState({ isLoading: false, error: null as string | null }),
  withEntities<Enrollment>(),
  withComputed((store) => ({
    pendingCount: computed(() => store.entities().filter(e => e.status === 'Pending').length)
  })),
  withMethods((store, api = inject(EnrollmentService)) => ({
    loadEnrollments: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        concatMap(() => api.getAll().pipe( 
          tap(rows => patchState(store, setAllEntities(rows), { isLoading: false })),
          catchError(() => { patchState(store, { isLoading: false }); return EMPTY; })
        ))
      )
    ),
    approveEnrollment: rxMethod<string>(
      pipe(
        tap(id => patchState(store, updateEntity({ id, changes: { status: 'Approved' } }))),
        concatMap(id => api.approve(id).pipe(
          catchError(() => {
            patchState(store, updateEntity({ id, changes: { status: 'Pending' } })); 
            return EMPTY;
          })
        ))
      )
    )
  }))
);