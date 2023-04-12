import { Injectable } from '@nestjs/common';
import { User } from './models/user';
import { CreateUserInput } from './dto/args/input/create-user.input';
import { v4 as uuidv4 } from "uuid";
import { UpdateUserInput } from './dto/args/input/update-user.input';
import { GetUserArgs } from './dto/args/get-user.args';
import { GetAllUserArgs } from './dto/args/get-all-users.args';
import { DeleteUserInput } from './dto/args/input/delete-user.input';

@Injectable()
export class UsersService {
    private users: User[] = [];

    createUser(createUserData: CreateUserInput): User {
        const user: User = {
            userId: uuidv4(),
            ...createUserData
        }

        this.users.push(user);

        return user;
    }
    
    updateUser(updateUserData: UpdateUserInput): User {
        const user = this.users.find(user => user.userId === updateUserData);

        Object.assign(user, updateUserData);

        return user;
    }

    getUser(getUserArgs: GetUserArgs): User {
        return this.users.find(user => user.userId === getUserArgs.userId);
    }

    getAllUsers(getAllUsersArgs: GetAllUserArgs): User[] {
        return getAllUsersArgs.userIds.map(userId => this.getUser({userId}));
    }

    deleteUser(deleteUserData: DeleteUserInput): User {
        const userIndex = this.users.findIndex(user => user.userId === deleteUserData.userId);
        
        const user = this.users[userIndex];

        return user;
    }

}