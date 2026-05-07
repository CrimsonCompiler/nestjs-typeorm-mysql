import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import {
  CreateUserParams,
  CreateUserProfileParams,
} from 'src/utils/types/user.types';
import { Repository } from 'typeorm';
import { UpdateUserParams } from '../../../utils/types/user.types';
import { Profile } from 'src/typeorm/entities/Profile';

@Injectable()
export class UsersService {
  // Talking with the database
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
  ) {}

  fetchUsers() {
    return this.userRepository.find({ relations: ['profile'] });
  }

  userDetails(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  createUser(userDetails: CreateUserParams) {
    const newUser = this.userRepository.create({
      ...userDetails,
      createdAt: new Date(),
    });

    return this.userRepository.save(newUser);
  }

  updateUser(id: number, updateUserDetails: UpdateUserParams) {
    return this.userRepository.update(
      {
        id,
      },
      { ...updateUserDetails },
    );
  }

  deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }

  // Profiles

  async createUserProfile(
    id: number,
    createUserProfileDetails: CreateUserProfileParams,
  ) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new HttpException(
        'User not found. Cannot create profile',
        HttpStatus.BAD_REQUEST,
      );
    }

    const newProfile = this.profileRepository.create(createUserProfileDetails);

    const savedProfile = await this.profileRepository.save(newProfile);
    user.profile = savedProfile;
    return this.userRepository.save(user);
  }
}
