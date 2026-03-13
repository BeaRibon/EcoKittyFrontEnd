import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { interval, startWith, switchMap, Subscription } from 'rxjs';
import { EcoKittyService } from '../../shared/service/ranking/ranking.service';

export interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
}

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LeaderboardComponent implements OnInit, OnDestroy {
  entries: LeaderboardEntry[] = [];
  loading = true;
  error: string | null = null;
  private refreshSubscription?: Subscription;

  constructor(private ecoKittyService: EcoKittyService) {}

  ngOnInit(): void {
    this.refreshSubscription = interval(60_000)
      .pipe(
        startWith(0),
        switchMap(() => this.ecoKittyService.getRanking())
      )
      .subscribe({
        next: (response) => {
          const list = response.listEntity ?? [];
          this.entries = list
            .slice()
            .map((item, index) => ({
              rank: index + 1,
              name: item.name.toUpperCase(),
              score: item.score
            }));
          this.loading = false;
          this.error = null;
        },
        error: (err) => {
          this.error = err?.message ?? 'Erro ao carregar ranking';
          this.loading = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.refreshSubscription?.unsubscribe();
  }
}