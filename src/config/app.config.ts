import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'leaderboard', pathMatch: 'full' },
  { path: 'leaderboard', loadComponent: () => import('../pages/leaderboard/leaderboard.component').then(m => m.LeaderboardComponent) },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
