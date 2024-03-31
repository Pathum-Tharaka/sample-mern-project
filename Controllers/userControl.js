const User = require("../Model/userModel");

const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }
    if (!users) {
        return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json({ users });

//dis[lay all users
return res.status(200).json({ users});
};

//data insert
const addUsers = async (req, res, next) => {
    const { name, email, password } = req.body;
    let user;
    try {
        user = new User({
            name,
            email,
            password,
        });
        await user.save();
    } catch (err) {
        console.log(err);
    }
    if (!user) {
        return res.status(404).send({ message: "Unable to Add users" });
    }
    return res.status(200).send({ user });
};

//get by id

const getId = async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
        user = await User.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!user) {
        return res.status(404).json({ message: "No User Found" });
    }
    return res.status(200).json({ user });
};

//update db

const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const { name, email, password } = req.body;
    let user;
    try {
        user = await User.findByIdAndUpdate(id, {
            $set: { name, email, password },
        });
        user = await User.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!user) {
        return res.status(404).json({ message: "No User Found" });
    }
    return res.status(200).json({ user });
};

//delete user

const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
        user = await User.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
    }
    if (!user) {
        return res.status(404).json({ message: "No User delete" });
    }
    return res.status(200).json({ user });
};
    
exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getId = getId;
exports.updateUser = updateUser;
exports.deleteUser=deleteUser;