/*
 * @Author: yuze.xia 
 * @Date: 2021-10-06 14:14:23 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2021-10-06 15:44:05
 */

import { useState, useEffect } from 'react'

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

export const useMount = (callback) => {
    useEffect(() => {
        callback();
    }, []);
}

// useDebounce
export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        // 每次在value变化时设置一个定时器
        const timeout = setTimeout(() => {setDebounceValue(value)}, delay)
        // 每次在上一个useEffect处理完以后清除定时器
        return () => clearTimeout(timeout)
    }, [value, delay])

    return debounceValue
}