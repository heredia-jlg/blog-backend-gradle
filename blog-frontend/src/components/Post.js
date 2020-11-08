import React, { Component } from 'react'
import { Button, Table, Row } from 'reactstrap';
import  {getAll}  from '../services/postsService.js'

export class Post extends Component {
    constructor(props)
    {
        super(props)
        this.state = { 
            posts: ''
         }
    }
    getPosts()
    {
        console.log("Before")
        console.log(this.state.posts)
        this.state.posts = getAll()
        console.log('-------')
        console.log(this.state.posts)
        console.log("Changed")
    }
    render() {
        return (
            <div>
                <Button
                label="button"
                onClick={() => this.getPosts()}
                >This is a button</Button>
                
                {this.props.posts? <Row>{this.state.posts.data}</Row> : <Row>nothing here</Row>} 
                
            </div>
        )
    }
} export default Post
