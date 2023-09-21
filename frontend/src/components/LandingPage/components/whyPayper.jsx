import React from "react";
import "../LandingCss/waypaper.css";
import { ReactComponent as CodePenLogo } from "./icons/codepen.svg";
import WayCard from "./wayCard";
const WayPayper =()=>{

    const cardItems=[
        {   
            id:1,
            heading: 'Expertly Curated',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aliquam?',
           logo:<CodePenLogo/>
        },
        {    
            id:2,
            heading: 'Expertly Curated',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aliquam?',
            logo: <CodePenLogo />
        },
        {   
            id:3,
            heading: 'Expertly Curated',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aliquam?',
            logo: <CodePenLogo />
        },
        {
            id:4,
            heading: 'Expertly Curated',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aliquam?',
            logo: <CodePenLogo />
        }, 
        {
            id:5,
            heading: 'Expertly Curated',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aliquam?',
            logo: <CodePenLogo />
        },
        
    ]
    return (
        <div className="wayUpperBody">
            <div className="wayInnerBody">
               <div className="wayTittle">
                  Way Payper?

               </div>
               <div >
                    <div className='wayCardAlign1'> 
                       {cardItems.map((item)=>
                       { return(
                           item.id < 3 ?<WayCard info = { item } /> : <></>
                        )
                        })}
                        
                    </div>
                    <div className='wayCardAlign2'>
                        {cardItems.map((item) => {
                            return (
                                item.id >2 ? <WayCard info={item} /> : <></>
                            )
                        })}

                    </div>
               
               </div>
            </div>
        </div>
    )
}

export default WayPayper;