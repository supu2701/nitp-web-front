import React from 'react';
import Newscard from './home/newscard';

import './home/css/home.css';
import Importantlink from './home/importantlink';
import nitpimg from './home/img/nitp.svg';
import { css } from 'styled-components';
import Notice from './home/notice';
import Eventcard from './home/eventcard';


const Home=()=>{
    return (
        <div>
            <div>
                <div className="bgimgwrap"><img className="nitpbackimg" src={nitpimg} alt="NATIONAL INSTITUTE OF TECHNOLOGY PATNA" loading="lazy"/></div>
            </div>
            <Importantlink />
            <div css={css`display:flex;@media(max-width:768px){display:block}`}>
            <div>
            <div className="news-head">
                        Notice
                <p css={css`margin-left:110px;`}>view all</p>
            </div>
            <div className="notice-row">
                        <Notice detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...." time="2 hours ago" />
                        <Notice detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...." time="2 hours ago" />
                        <Notice detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...." time="2 hours ago" />
                        <Notice detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...." time="2 hours ago" />
                        <Notice detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...." time="2 hours ago" />
            </div>
            </div>
            <div>
                <div className="news-head">
                    Events
                <p css={css`margin-left:110px;`}>view all</p>
                </div>
                <div className="event-row">
                        <Eventcard detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...." time="2 hours ago"/>
                        <Eventcard detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...." time="2 hours ago" />
                        <Eventcard detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...." time="2 hours ago" />
                        <Eventcard detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...." time="2 hours ago" />
                        <Eventcard detail="Seating Plan for 20-12-2020 AN for the xyzuibj students of UG/PG...." time="2 hours ago" />

                </div>
            </div>
            </div>
            <div className="news-head">
                News
                <p css={css`margin-left:122px;`}>view all</p>
            </div>
            
            <div className="news-row">
                <div className="news-viewbox">
                    <Newscard head="Workshop organised" detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.." />
                    <Newscard head="Workshop organised" detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.." />
                    <Newscard head="Workshop organised" detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.." />
                    <Newscard head="Workshop organised" detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.." />
                    <Newscard head="Workshop organised" detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.." />
                    <Newscard head="Workshop organised" detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.." />
                    <Newscard head="Workshop organised" detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.." />
                    <Newscard head="Workshop organised" detail="IEEE organised a Workshop for the students of 1st and 2nd year on the grand.." />
                </div>
            </div>
        </div>
    )
}

export default Home