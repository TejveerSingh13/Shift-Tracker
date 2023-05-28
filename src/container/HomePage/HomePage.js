import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OverView from "../../components/OverView/Overview";
import Summary from "../../components/Summary/Summary";
import AddShifts from "../AddShifts/AddShifts";
import { getUserData } from "../../redux/ActionCreator";
import { HomePageContainer } from "./style";


const HomePage = () => {
    const userData = useSelector(state => state.user)
    console.log("before",userData)
    const dispatch = useDispatch()
    useEffect(() => {
        if(userData.data.length === 0)dispatch(getUserData());
        console.log('print inside UE');
      },[dispatch, userData.data.length]);
    console.log("after",userData)

    return(
        <HomePageContainer>
            <Summary />
            <AddShifts />
            <OverView />
        </HomePageContainer>
    );
}
export default HomePage