import { useState } from 'react';
import '../../assets/styles/header.scss';

const Header = () => {
    const [isLoading, setIsLoading] = useState(false);

    setTimeout(() => {
        setIsLoading(true);
    }, 900)
    return (
        <div className="header_container">
            <h1 className="logo_box">
                <div className="logo"></div>
            </h1>
            { isLoading && (
                <div className="menu_box">
                    <button className="btn_about">ABOUT</button>
                    <button className="btn_contact">CONTACT</button>
                    <button className="btn_members">MEMBERS</button>
                    <div className="members_group_box">
                        <p>GROUP</p>
                        <p>이세돌</p>
                        <p>STATICMEMBER</p>
                        <p>고멤시즌1</p>
                        <p>고멤시즌2</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header;