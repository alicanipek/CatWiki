import axios, { AxiosInstance } from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const API_KEY = process.env.CATAPI_KEY || '';

interface ICatBreedsQueryParams {
    attach_breed?: number;
    page?: number;
    limit?: number;
}

export class CatService {
    api: AxiosInstance;
    constructor();
    constructor(api?: AxiosInstance) {
        if (api != undefined) {
            this.api = api;
        } else {
            this.api = axios.create({
                baseURL: 'https://api.thecatapi.com/v1',
                headers: {
                    'x-api-key': API_KEY,
                },
            });
        }
    }

    async searchBreedByName(searchTerm: string) {
        try {
            const res = await this.api.get(`/breeds/search?q=${searchTerm}`);
            return res.data;
        } catch (err) {
            throw err;
        }
    }

    async getImageByImageId(imageId: string) {
        try {
            const res = await this.api.get(`/images/${imageId}`);
            return res.data;
        } catch (err) {
            throw err;
        }
    }

    async getImagesByBreedId(breedId: string, limit: number) {
        try {
            const res = await this.api.get(
                `/images/search?breed_id=${breedId}&limit=${limit}`
            );
            return res.data;
        } catch (err) {
            throw err;
        }
    }

    async getRandomImages(limit: number) {
        try {
            const res = await this.api.get(
                `/images/search?limit=${limit}&mime_types=png,jpeg`
            );
            return res.data;
        } catch (err) {
            throw err;
        }
    }

    async getAllBreeds() {
        try {
            const res = await this.api.get(`/breeds`);
            return res.data;
        } catch (err) {
            throw err;
        }
    }
}
