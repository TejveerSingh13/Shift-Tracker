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
    return(
        <>
        <OVContainer>
            <div>Your most recent Shifts</div>
            {recentShifts.map((shift, index) => {
                const date = new Date(shift.date);
                return (
                    <OVItems 
                    odd={!(index % 2)}
                    key={index}
                    day={weekdays[date.getDay()]} 
                    date={date.getDate()} 
                    month={months[date.getMonth()]} 
                    place={shift.place} 
                    hr={shift.hrs}/>)
            })}
            
        </OVContainer>
        {/* <OVItems day='Monday' date='26' month='January' place='Little India' hr='6'/> */}
            {/* <OVItems day='Monday' date='26' month='January' place='ID Station' hr='8'/>    */}
        {/* <Modal>
            <div>helow world1</div>
            <div>helow world2</div>
            <div>helow world3</div>
        </Modal> */}
        </>
    )
}
export default OverView