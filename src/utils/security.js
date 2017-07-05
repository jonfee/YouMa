// 当前登录用户的Cookie键
var loginUserCookieKey = '__youma.loginuser_';
// Cookie过期时间
var maxage = 30 * 60;

// 是否为json对象
var isJSON = function(obj) {
    return typeof obj === "object" && Object.prototype.toString.call(obj).toLowerCase() === "[object object]" && !obj.length;
};

// 序列化
var serialize = function(value) {
    return value === undefined || typeof value === "function" ? value + "" : JSON.stringify(value);
};

// 反序列化
var deserialize = function(value) {
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
    /**清除登录信息 */
    clear(){
        document.cookie = `${loginUserCookieKey}='; max-age=0; path=/`
    },
    setCurrentUser(user) {
        if (user && isJSON(user)) {
            // 设置当前登录用户的Cookie
            document.cookie = `${loginUserCookieKey}=${serialize(user)}; max-age=${maxage}; path=/ `
        } else if (user && !isJSON(user)) {
            document.cookie = `${loginUserCookieKey}=${user}; max-age=${maxage}; path=/`
        }
    },
    getCurrentUser() {

        var defNull = { 'username': '' };

        var arr, reg = new RegExp("(^| )" + loginUserCookieKey + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {

            var userCookie = unescape(arr[2]);

            var user = deserialize(userCookie);

            if (user) {
                this.setCurrentUser(user); //重新续约当前登录用户

                return user;
            }

            return defNull;
        } else
            return defNull;
    },
    isLogin(){
        var user = this.getCurrentUser();

        return user.username != '';
    }
}