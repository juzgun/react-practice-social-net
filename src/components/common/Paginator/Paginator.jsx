import React, {useState} from 'react';
import classes from './Pages.module.css';



const Pages = ({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={classes.pages}>
            { portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
            {
                pages
                    .filter(p => p>=leftPortionPageNumber && p<=rightPortionPageNumber)
                    .map((i) => {
                        return <span key={i} className={(currentPage === i) ? classes.selectedPage : classes.pages} onClick={() => { onPageChanged(i); }}>{i}</span>;
                    })}
            {portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
        </div>
    )
}

export default Pages;