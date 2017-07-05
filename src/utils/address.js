/**
 * 用户收货地址CRUD操作类
 */

//引入 localStorage 操作类
import { storage as Storage } from './localStorage';
//引入 security 操作类
import security from './security';

var getCookieName = function(){
    var user = security.getCurrentUser();
    return "address_" + user.username;
}

var currentKey = getCookieName();

export default{
    getLast: function(){
        return Storage.get(currentKey);
    },
    save: function(addr){
        Storage.set(currentKey,addr);
    }
}

