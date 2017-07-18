import React from 'react';
class ComponentBox extends React.Component {
  state={
    comments:[
      "第一条评论",
      "第二条评论"]
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let newComment = this.commentInput.value
    this.setState({
      comments: [...this.state.comments, newComment]
    })
    this.commentForm.reset()
  }
  render() {
    return (
      <div className="comment-box">
        {
          this.state.comments.map(item => (
            <li className="comment" key={Math.random()}>{item}</li>
          ))
        }
        <form ref={value => this.commentForm = value}
          onSubmit={this.handleSubmit} className="comment-form">
          <input type="text" className="input" ref={value => this.commentInput = value} />
          <button type="submit" className="submit-btn">提交</button>
        </form>
        <div className="underline"></div>
      </div>
    );
  }
}

export default ComponentBox;
