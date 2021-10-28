import { useState } from 'react';
import './loading.scss';

const Loading = () => {
    const [isFinishLoding, setIsFinishLoding] = useState(false);

    return (
        <div className="loading_container">
            <div className={isFinishLoding ? "finish_loding":"logo"}
                onClick={() => setIsFinishLoding(true)}
            ></div>
        </div>
    )
}

export default Loading;