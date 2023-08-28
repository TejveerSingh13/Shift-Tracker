// import Modal from "../Modal";
import OVItems from "./OVitems";
import { OVContainer } from "./style";

const OverView = () => {

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const recentShifts =[
        {
            place: "Saffron Grill",
            ti: "time in",
            to: "time out",
            date: "2023-08-22",
            hrs: 6
        },
        {
            place: "ID Station",
            ti: "time in",
            to: "time out",
            date: "2023-08-21",
            hrs: 10
        },
        {
            place: "Saffron Grill",
            ti: "time in",
            to: "time out",
            date: "2023-08-20",
            hrs: 16
        },
        {
            place: "Saffron Grill",
            ti: "time in",
            to: "time out",
            date: "2023-08-29",
            hrs: 6
        }
    ]

    // const onClickHandler = (e) => {
    //     console.log("Helllooooooo",e.target);
    // }

    return(
        <>
        <OVContainer>
            <div style={{fontSize:'24px'}}>Your most recent Shifts</div>
            {recentShifts.map((shift, index) => {
                const date = new Date(shift.date);
                return (
                    <OVItems 
                    shift={shift}
                    odd={!(index % 2)}
                    key={index}
                    day={weekdays[date.getDay()]} 
                    date={date.getDate()} 
                    month={months[date.getMonth()]} 
                    place={shift.place} 
                    hr={shift.hrs}/>)
            })}
            
        </OVContainer>
        </>
    )
}
export default OverView