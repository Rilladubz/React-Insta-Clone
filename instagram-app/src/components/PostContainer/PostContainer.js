import React from 'react';
import CommentSection from './CommentSection/CommentSection';

const PostContainer = (props) => {
    return (
        <div className='postContainer'>

            {props.dumData.map(ePerson => (
                <div className='thumbnImage'>
                    <div>
                        <img src={ePerson.thumbnailUrl} alt={`This is a ${ePerson.username}\`s profile picture`}></img>
                        <b>{ePerson.username}</b>
                    </div>

                    <img src={ePerson.imageUrl} alt={`This is a image posted by ${ePerson.username}`}></img>

                    <div>
                        <CommentSection commentProp={ePerson.comments} />
                    </div>




                </div>

            ))}


        </div>
    );
};

export default PostContainer;