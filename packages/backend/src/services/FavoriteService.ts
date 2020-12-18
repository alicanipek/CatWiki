import { getRepository } from 'typeorm';
import { Favorite } from './../entity/Favorite';

export class FavoriteService {
    async AddOrUpdateFavorite(
        breedId,
        breedName,
        breedDescription,
        breedImageUrl
    ) {
        let fav = await getRepository(Favorite).findOne(breedId);
        if (fav) {
            fav.searchCount += 1;
            getRepository(Favorite).save(fav);
        } else {
            getRepository(Favorite).save({
                id: breedId,
                name: breedName,
                description: breedDescription,
                imageUrl: breedImageUrl,
                searchCount: 1,
            });
        }
    }

    async getMostSearchedBreeds(limit: number) {
        return getRepository(Favorite).find({
            order: {
                searchCount: 'DESC',
            },
            take: limit,
        });
    }
}
