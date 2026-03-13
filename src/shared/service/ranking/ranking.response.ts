export interface EcoKittyResponse {
    id: number;
    name: string;
    score: number;
}

/** Resposta da API de ranking (treatment, dto, listDto, listEntity, messagem) */
export interface RankingApiResponse {
    treatment: unknown;
    dto: unknown;
    listDto: unknown;
    listEntity: EcoKittyResponse[];
    messagem: string | null;
}