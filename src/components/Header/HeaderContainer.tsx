import React, { FC, ReactElement } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { deleteLoginData } from '../../redux/authReduser';
import {ReactComponent} from "*.svg";

export type HeaderContainerPropsType = {
    isAuth: boolean
    login: string
    deleteLoginData: any
}

const HeaderContainer: FC<HeaderContainerPropsType> = (props):ReactElement => {

    // useEffect(() => {
    //     props.getAuthUserData();
    // }, [props]);

    return (
        <Header {...props} />
    )
}



let mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { deleteLoginData })(HeaderContainer);