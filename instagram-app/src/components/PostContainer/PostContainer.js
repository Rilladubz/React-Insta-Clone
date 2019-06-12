import React from 'react';
import CommentSection from './CommentSection/CommentSection';
import heartIcon from '../../Images/heartIcon.png';
import commentIcon from '../../Images/commentIcon.png';
import './PostContainer.css';

const PostContainer = (props) => {
    return (

        <div className='postContainer'>

            {props.dumData.map(ePerson => (
                <div key={ePerson.id} className='eachPostContainer'>

                    <div className='profileImageNName'>
                        <img className='profileImage' src={ePerson.thumbnailUrl} alt={`This is a ${ePerson.username}\`s profile picture`}></img>
                        <b className='userName'>{ePerson.username}</b>
                    </div>

                    <img className='postedImage' src={ePerson.imageUrl} alt={`This is a image posted by ${ePerson.username}`}></img>

                    <div className='likeNCommentIcon'>
                        <img className='heartIcon' src={heartIcon} alt='This is a heart icon to like this post'></img>
                        <img className='commentIcon' src={commentIcon} alt='This is a comment icon to comment on this post'></img>
                    </div>

                    <div className='likes'>{ePerson.likes}</div>



                    <CommentSection commentProp={ePerson.comments} />





                </div>

            ))}


        </div>
    );
};

export default PostContainer;