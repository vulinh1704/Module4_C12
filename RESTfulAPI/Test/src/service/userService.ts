import {User} from "../enitity/user";
import {AppDataSource} from "../data-source";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {SECRET} from "../middleware/auth";

class UserService {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }


    addUser = async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
        return this.userRepository.save(user);
    }

    checkUser = async (user) => {
        let userFind = await this.userRepository.findOneBy({username: user.username});
        if (userFind) {
            let comparePassword = await bcrypt.compare(user.password, userFind.password);
            if (comparePassword) {
                let payload = {
                    username: userFind.username,
                    idUser: userFind.id
                }
                return jwt.sign(payload, SECRET, {
                    expiresIn: 36000 * 1000
                });
            } else {
                return 'Password is wrong';
            }
        } else {
            return 'User is not exist'
        }
    }

}

export default new UserService();