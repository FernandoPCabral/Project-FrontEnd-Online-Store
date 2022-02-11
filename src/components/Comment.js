import React from 'react';
import { string } from 'prop-types';

class Comment extends React.Component {
  render() {
    const { email, comment, star } = this.props;
    return (
      <>
        <h1>{email}</h1>
        <h2>{star}</h2>
        <p>{comment}</p>
      </>
    );
  }
}

Comment.propTypes = {
  email: string.isRequired,
  star: string.isRequired,
  comment: string.isRequired,
};

export default Comment;
