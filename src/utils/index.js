/*
 * @Author: yuze.xia 
 * @Date: 2021-10-06 14:14:23 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2021-10-06 14:29:14
 */

export const isFalsy = (value) => value === 0 ? true : !!value;

export const cleanObject = (object) => {
    const result = {...object}
    
    Object.keys(result).forEach(key => {
        const value = result[key];
        
        if(!isFalsy(value)) {
            delete result[key]
        }
    })
    return result;
}