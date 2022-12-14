import React from 'react';
import './List.scss';
import Badge from "../Badge";
import classname from "classname";

function List({items,active}) {
    return (
        <ul className='list'>
            {items && items.map((item, idx) => (
                <li className={classname(active ? 'active' : '' )}
                    key = {idx} >
                    <i>
                        {item.icon ? (<img src= {item.icon} alt='All' />
                            ):(
                            <Badge color= {item.color} />
                            )}
                    </i>
                    <span>
                        {item.name}
                    </span>

                </li>
            ))}
        </ul>
    );
}

export default List;