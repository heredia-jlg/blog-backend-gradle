import React, { Component } from 'react';
import { Button, Table, Row } from 'reactstrap';
import  {getAll}  from '../services/postsService.js';
import { connect } from 'react-redux';

class postTable extends Component {
    constructor(props)
    {
        super(props);
        this.state = { 
            posts: []
         }
    }

    getPosts()
    {
        console.log("Before")
        console.log(this.state.posts)
        getAll().then(
            (response) => {
                this.props.dispatch({type: 'showAll', posts: response.data})
            }
        )
        console.log('-------')
        console.log(this.props.posts)
        console.log("Changed")
    }
    render() {
        return (
            <div>
                <Button
                label="button"
                onClick={() => this.getPosts()}
                >This is a button</Button>
                
                <Table>

                </Table>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {posts} = state;
    return {posts: posts};
}

export default connect(mapStateToProps)(postTable)
