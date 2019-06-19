import React from 'react';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allComments: props.commentProp,
            newComment: ''
        };
    };

    handleChange = e => {
        console.log(this.state.newComment)
        this.setState({ [e.target.name]: e.target.value });

    }

    floatingProp = e => {
        e.preventDefault()

        const newObj = {
            id: Date.now(),
            username: 'Samuel',
            text: this.state.newComment,
        };

        this.setState({
            allComments: [...this.state.allComments, newObj]
        })

    };

    render() {
        console.log({ comment: this.state.allComments });
        return (
            <div className='commentSectionContainer' >

                {this.state.allComments.map(eaComments => (

                    <div className='CmtSectionContainer'>

                        <div className='commentSection'>
                            <b className='userName'>{eaComments.username}</b>
                            {eaComments.text}
                        </div>

                    </div>
                ))}

                <form onSubmit={this.floatingProp}>
                    <input
                        className='commentInput'
                        type='text'
                        name='newComment'
                        value={this.state.newComment}
                        placeholder='add a comment'
                        onChange={this.handleChange} >

                    </input>
                </form>

            </div >

        );
    }
};

export default CommentSection;