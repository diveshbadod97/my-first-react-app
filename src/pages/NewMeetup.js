import { useHistory } from "react-router";
import NewMeetupForm from "../components/Meetups/NewMeetupForm";
function NewMeetupsPage(){
    const history = useHistory();
    function onAddHandler(meetupData){
        fetch('https://first-react-project-33393-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body:JSON.stringify(meetupData),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(()=>{
            history.replace('/');
        });
    }
    return(
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={onAddHandler}/>
        </section>
    );
}

export default NewMeetupsPage;