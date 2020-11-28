import React from 'react';
import PostTable from './PostTable.component.js'
import Router from './routing'

export default function Dashboard()
{
    
        return(
            <div>
                <h1>Dashboard</h1>
                <PostTable></PostTable>
                <Router></Router>
            </div>
        );
    
}