import React from 'react';

const CommentSection = (props) => {
    return (
        <div>
            {props.commentProp.map(eComments => (
                <div className='CmtSectionContainer'>

                    <div className='impressions'>

                    </div>

                    <div className='commentSection'>
                        <b>{eComments.username}</b>
                        {eComments.text}
                    </div>

                </div>
            ))}

            <input type='text' placeholder='add a comment'></input>

        </div>
    );
};

export default CommentSection;