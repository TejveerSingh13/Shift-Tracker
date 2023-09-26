import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OverView from "../../components/OverView/Overview";
import Summary from "../../components/Summary/Summary";
import AddShifts from "../AddShifts/AddShifts";
import { getUserData } from "../../redux/ActionCreator";
import { HomePageContainer, LoaderContainer, LoaderIcon, NavigationButton, NavigationContainer } from "./style";
import Modal from "../../components/Modal";
import AddLocation from "./AddLocation";


const HomePage = () => {
    const userData = useSelector(state => state.user)
    const [updateToggle, setUpdateToggle] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if(userData.data.length === 0)dispatch(getUserData());
      },[dispatch, userData.data.length]);

    const onToggleHandle = () => {
        setUpdateToggle((current) => !current)
    }

    return(
        <>
            <NavigationContainer>
                <span>Hello, Tejveer</span>
                <div style={{display:'flex'}}>
                    <NavigationButton margin={true} onClick={onToggleHandle}>Add place</NavigationButton>
                    <NavigationButton>Logout</NavigationButton>
                </div>
            </NavigationContainer>
            <HomePageContainer>
                {userData.loading ? (<LoaderContainer>
                    <LoaderIcon />
                </LoaderContainer>)
                :( <> 
                <Summary />
                <AddShifts places={userData.data.places}/>
                <OverView />  
                </>) }
            </HomePageContainer>
            {updateToggle && 
            <Modal onclick={onToggleHandle}>
                <AddLocation />
            </Modal>}
        </>
    );
}
export default HomePage