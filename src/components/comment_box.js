import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
// we are saving every action creator in the variable 'actions'
// '*' means everything / all

class CommentBox extends Component {
    constructor(props) {
        super(props);

        this.state = { comment: ''};
    }

    handleChange(event) {
        this.setState({ comment: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.saveComment(this.state.comment);
        this.setState({ comment: ''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className='comment-box'>
            <h4>Add a comment</h4>
                <textarea
                value={this.state.comment}
                onChange={this.handleChange.bind(this)}
                />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
            // note: putting the button on a new div forces it onto a new line
        )
    }
}

export default connect(null, actions)(CommentBox);