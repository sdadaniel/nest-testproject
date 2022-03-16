import { EntityRepository, Repository } from 'typeorm';
import { Profile } from '../entity/profile.entity';
@EntityRepository(Profile)
export class ProFileRepository extends Repository<Profile> {}
