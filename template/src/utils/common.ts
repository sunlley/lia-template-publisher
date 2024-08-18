
export const randomString =  (length:number, type?:'all'|'number'|'string'|'chars'|'normal') =>{
    if (length ===  0) { length = 6; }
    if (!type ) { type = 'normal'; }
    let e = '';
    let keys = '';
    if (type === 'all') {
        keys = '!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    }else {
        if (type.indexOf('number')>=0){
            keys += '1234567890';
        }
        if (type.indexOf('string')>=0){
            keys += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        }
        if (type.indexOf('chars')>=0){
            keys += '!@#$%^&*()_+';
        }
        if (type.indexOf('normal')>=0){
            keys += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
        }
    }
    for (let o = 0; o < length; o++) {
        e += keys.charAt(Math.floor(Math.random() * keys.length));
    }
    return e;
};
