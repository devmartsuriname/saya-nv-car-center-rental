import React from 'react';
import type { ManuItemOnePage } from '../link-content/LinkType';

interface MainManuListProps {
    onePageManuList?: ManuItemOnePage[];
}

const MainManuList: React.FC<MainManuListProps> = ({ onePageManuList }) => {
    return (
        <ul className="main-menu__list">
            {onePageManuList?.map((item) => (
                <li key={item.id}>
                    <a href={`#${item.linkId}`}>{item.link}</a>
                </li>
            ))}
        </ul>
    );
};

export default MainManuList;
