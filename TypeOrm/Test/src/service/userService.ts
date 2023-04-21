import {User} from "../enitity/user";
import {AppDataSource} from "../data-source";


class UserService {
    private userRepository;
    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }


    checkUser = async (user) => {
        let userFind = await this.userRepository.findOneBy({username: user.username, password: user.password});
        return userFind;
    }

}

export default new UserService();