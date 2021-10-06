/*
 * @Author: yuze.xia 
 * @Date: 2021-10-06 13:08:07 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2021-10-06 14:11:23
 */
import React from 'react'
import { useEffect } from "react"

export const SearchPanel = ({users, param, setParam}) => {
    
    return (
        <form>
            {/* setParam(Object.assign({}, param, {name: evt.target.value})) */}
            <input type='text' value={param.name} onChange={evt => setParam({
                ...param,
                name: evt.target.value
            })} />
            <select value={param.personId} onChange={evt => setParam({
                ...param,
                personId: evt.target.value
            })}>
                <option value={''}>负责人</option>
                {
                    users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
                }
            </select>
        </form>
    )
}