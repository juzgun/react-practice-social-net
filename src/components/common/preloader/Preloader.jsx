import React from 'react';
import classes from './Preloader.module.css';
import loadIcon from '../../../assets/images/loading.svg'

const Preloader = (props) => {
    return <div className={classes.loadingIcon}>
        <img src={loadIcon} style={{ display: 'flex', justifyContent: 'center', width: '100px', height: '100px' }} alt='load icon'></img>
    </div>
}

export default Preloader;