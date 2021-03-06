import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Greeting from '../../components/Greeting/Greeting';
import Score from '../../components/Score/Score'



const UserPage = (props) => {
    
    return (
        <div className="UserPage">
        <Greeting name={props.name} />
        <Banner date={props.date} />
        <Score days={props.days}
                currentDate={props.currentDate} />
        <Link className='btn btn-default DayDetailPage-link-margin' to='/day'>View Yesterday's Data</Link>
        <br></br>
        <Link className='btn btn-default WeekDetailPage-link-margin' to='/week'>View This Week's Data</Link>
        <br></br>
        <Link className='btn btn-default AddData-link-margin' to='/DataForm'>Add Data</Link>
        <br></br>
        <Link className='btn btn-default Logout-link-margin' to='' onClick={props.handleLogout}>LOG OUT</Link>
        </div>
    )
}

export default UserPage;