import { useState } from 'react';
import '../../assets/styles/loading.scss';

interface LoadingProps {
    onClick: Function
}

const Loading = (props: LoadingProps) => {
    const [isFinishLoding, setIsFinishLoding] = useState(false);

    const loadingFinish = () => {        
        setIsFinishLoding(true);
        setTimeout(() => {
            props.onClick();
        }, 1000);
    }

    return (
        <div className="loading_container">
            <div className="loading_box">
                <div className={isFinishLoding ? "finish_loding":"loading_logo"}
                    onClick={() => loadingFinish()}></div>
            </div>
        </div>
    )
}

export default Loading;