/** packages */
const CryptoJS = require("crypto-js");
const config = require("config");
const jwt = require("jsonwebtoken");

/** Encrypt password */
exports.EncryptPassword = (password) => {
    let secretkey = config.get("secretkeys").cryptojs;
    let encryptedPassword = CryptoJS.AES.encrypt(password, secretkey).toString();
    return encryptedPassword;
};

/** Decrypt password */
exports.DecryptPassword = (cryptedPassword) => {
    let secretkey = config.get("secretkeys").cryptojs;
    let bytes = CryptoJS.AES.decrypt(cryptedPassword, secretkey);
    let originalPass = bytes.toString(CryptoJS.enc.Utf8);
    return originalPass;
};

/** Token */
exports.GenerateToken = (user) => {
    let secretKey = config.get("secretkeys").jwt;
    let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + config.get("sessionTime"),
        data: {
            username: user.username,
            id: user._id,
            role: user.role
        }
    }, secretKey);
    return token;
};