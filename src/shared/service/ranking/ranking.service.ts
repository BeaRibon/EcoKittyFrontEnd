import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RankingApiResponse } from "./ranking.response";

@Injectable({
    providedIn: 'root'
})
export class EcoKittyService {
    /** URL relativa: em dev o proxy encaminha para localhost:8891 (evita CORS) */
    private apiUrl = '/v1/api/ecoKitty/score';

    constructor(private http: HttpClient) {}

    getRanking() {
        return this.http.get<RankingApiResponse>(this.apiUrl);
    }
}