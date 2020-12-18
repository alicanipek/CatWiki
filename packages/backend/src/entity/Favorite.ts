import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    PrimaryColumn,
} from 'typeorm';

@Entity('Favorite')
export class Favorite extends BaseEntity {
    @PrimaryColumn()
    id!: string;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column()
    imageUrl!: string;

    @Column()
    searchCount!: number;
}
