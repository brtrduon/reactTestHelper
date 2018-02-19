import React, { Component } from 'react';
import { connect } from 'react-redux';
// we need to import (and use) { connect } to be able to turn a component into a container

const CommentList = (props) => {
    const list = props.comments.map(comment => <li key={comment}>{comment}</li>);
    return (
        <ul className='comment-list'>{list}</ul>
    );
};

function mapStateToProps(state) {
    return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);