/*
 * @Author: yuze.xia 
 * @Date: 2021-10-06 13:07:13 
 * @Last Modified by: yuze.xia
 * @Last Modified time: 2021-10-06 15:45:33
 */
import React from 'react'
import * as qs from 'qs'
import { useState, useEffect } from 'react';
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { cleanObject, useMount, useDebounce } from '../../utils'

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const debounceParam = useDebounce(param, 1000)
    const [list, setList]   = useState([])
    const [users, setUsers] = useState([])
    // 初始化项目列表
    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async response => {
            if(response.ok) {
                setList(await response.json());
            }
        })
    }, [debounceParam])
    // 初始化用户
    useMount(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if(response.ok) {
                setUsers(await response.json())
            }
        })
    })
    return (
        <div>
            <SearchPanel users={users} param={param} setParam={setParam} />
            <List users={users} list={list} />
        </div>
    )
}