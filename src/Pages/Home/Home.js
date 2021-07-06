//Code for the user profile
import React from 'react';
import Header from '../../Components/Header/Header';
const Home = ({handleLogged}) => {
    return(
        <div>
            <Header isLogged={handleLogged}/>
            <h1>Welcome to Myself</h1>
            <h3> Name: Del Valle, Eugene U..</h3>
            <h3> Section: 32E1</h3>
            <h3> Course: Bachelor of Science in Information and Technology</h3>
            <h3> Hobbies: Editing Skills, Gamer, Drawing skills, Designing </h3>
        </div>
    )
}

export default Home;    