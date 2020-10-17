import React  from 'react';
import { Link } from 'react-router-dom';
import Greeting from '../../components/Greeting/Greeting';
import DayGraph from '../../components/DayGraph/DayGraph';



const DayDetailPage = (props) => {
    let yesterdayId = props.days.map((day) => {
        let currentDate = new Date(day.date)
        currentDate = currentDate.toDateString()
        const yesterday = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toDateString()
        if (currentDate === yesterday) {
            return day._id
        }
        })
    yesterdayId = yesterdayId.filter(id => id !== undefined)
    
    let yesterdayObj = props.days.map((day) => {
        if (day._id ===  yesterdayId[0]) {
            return day
        }
    })
    yesterdayObj = yesterdayObj.filter(day => day !== undefined)
    console.log(yesterdayId)
    console.log(yesterdayObj)
    return (
        <div className="DayDetailPage">
        <Greeting name={props.name}/>
        <h5>This is the Day Detail Page</h5>
        <DayGraph
        days={props.days}
        date={props.date}
            />
        <Link className='btn btn-default WeekDetailPage-link-margin' to='/week'>View This Week's Data</Link>
        <br></br>
        <Link className='btn btn-default UserPage-link-margin' to='/user'>Home</Link>

        <Link className='btn btn-default UpdateDate-link-margin' to={{ pathname: '/update', state: {yesterdayObj} }}>Edit Data</Link>

        <Link className='btn btn-default Delete-link-margin' to='/user' onClick={() => props.handleDeleteDay(yesterdayId)}>Delete</Link>
        {/* <Link className='btn btn-default Delete-link-margin' to='/user' onClick={() => props.handleDeleteDay(yesterdayId.filter(id => id !== undefined))}>Delete</Link> */}
        </div>
    )
}

export default DayDetailPage;