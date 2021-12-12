import { useState } from 'react';
import '../../assets/styles/loading.scss';

const Loading = () => {
    const [isFinishLoding, setIsFinishLoding] = useState(false);

    setTimeout(() => {
        setIsFinishLoding(true);
    }, 4000)

    return (
        <div className="loading_container">
            <div className="loading_box">
                <div className={isFinishLoding ? "finish_loding":"loading_logo"}></div>
                <svg className="pulse" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <circle id="Oval" cx="512" cy="512" r="512"></circle>
                    <circle id="Oval" cx="512" cy="512" r="512"></circle>
                    <circle id="Oval" cx="512" cy="512" r="512"></circle>
                    <circle id="Oval" cx="512" cy="512" r="512"></circle>
                </svg>
            </div>
        </div>
    )
}

export default Loading;