import { Media } from './media'

export interface Discover {
    page: number;
    total_results: number;
    total_pages: number;
    results: Media[];
}