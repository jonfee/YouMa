// 当前登录用户的Cookie键
const loginUserCookieKey = '__youma.loginuser_';
// Cookie过期时间
const maxage = 30 * 60;

// 是否为json对象
let isJSON = function(obj) {
    return typeof obj === "object" && Object.prototype.toString.call(obj).toLowerCase() === "[object object]" && !obj.length;
};

// 序列化
let serialize = function(value) {
    return value === undefined || typeof value === "function" ? value + "" : JSON.stringify(value);
};

// 反序列化
let deserialize = function(value) {
    if (typeof value !== "string") {
        return undefined;
    }

    try {
        return JSON.parse(value);
    } catch (e) {
        return value || undefined;
    }
};

export default {
    setCurrentUser(user) {
        if (user && isJSON(user)) {
            // 设置当前登录用户的Cookie
            document.cookie = `${loginUserCookieKey}=${serialize(user)}; max-age=${maxage}; `
        } else if (user && !isJSON(user)) {
            document.cookie = `${loginUserCookieKey}=${user}; max-age=${maxage}; `
        }
    },
    getCurrentUser() {

        const defNull = { 'username': '' };

        var arr, reg = new RegExp("(^| )" + loginUserCookieKey + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {

            let userCookie = unescape(arr[2]);

            let user = deserialize(userCookie);
            
            if (user) {
                this.setCurrentUser(user); //重新续约当前登录用户

                return user;
            }

            return defNull;
        } else
            return defNull;
    }

}