import React from 'react';
import dummyData from '../DummyData/dummy-data';
import './MainPage.css';

// ________________Component-Imports__________________
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';

class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            dummyData: dummyData,
        };
    };



    render() {
        // console.log(this.state.dummyData);
        return (
            <div className='mainContainer'>
                <SearchBar />
                <PostContainer dumData={this.state.dummyData} />
            </div>
        );
    };
};

export default MainPage;


