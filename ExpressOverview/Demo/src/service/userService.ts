import {User} from "../enitity/user";


class UserService {
    constructor() {
    }

    getAll = async () => {
        let users = await User.find();
        return users;
    }

    checkUser = async (user) => {
        let userFind = await User.findOne({username: user.username, password: user.password});
        return userFind;
    }

}

export default new UserService();