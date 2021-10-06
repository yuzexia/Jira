/*
 * @Author: yuze.xia 
 * @Date: 2021-10-06 13:08:07 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2021-10-06 17:44:15
 */
import React from 'react'

export interface User {
    id: string,
    name: string,
    email: string,
    title: string,
    organization: string
}

interface SearchPanelProps {
    users: User[],
    param: {
        name: string,
        personId: string
    },
    setParam: (param: SearchPanelProps['param']) => void
}

export const SearchPanel = ({users, param, setParam}: SearchPanelProps) => {
    
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