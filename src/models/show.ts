export interface Show {
    id: number;
    score: number;
    url: string;
    name: string;
    language: string;
    genres: string[] | null;
    status: string;
    premiered: string;
    officialSite: string;
    image: {
        medium: string;
        original: string;
    };
    summary: string;
    rating: {
        average: number;
    };
}
