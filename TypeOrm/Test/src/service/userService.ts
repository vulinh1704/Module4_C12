import {User} from "../enitity/user";
import {AppDataSource} from "../data-source";


class UserService {
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }


    checkUser = async (user) => {
        // Promise : 3 trạng thái : thành công đưa data vào resole(data) , thất bại đưa lỗi vào reject(err)
        let userFind = await this.userRepository.findOneBy(
            {username: user.username, password: user.password}
        );
        // [] : find() ; {} : findOneBy
        return userFind;
    }

}

export default new UserService();