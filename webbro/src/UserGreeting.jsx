
function UserGreeting(props){
 // eslint-disable-next-line react/prop-types
 if(props.isLoggedIn){
    return(

        // eslint-disable-next-line react/prop-types
        <h2> WECOME BACK {props.username}</h2>
    );
 };
};
export default UserGreeting