function myInstanceof(left, right) {
    let proto = left.__proto__;
    let prototype = right.prototype;
    if (proto === null || prototype === null) {
        return false;
    } else if(proto === prototype){
        return true;
    } else {
        myInstanceof(proto, right);		// 递归，判断right是否left的原型链上
    }
}