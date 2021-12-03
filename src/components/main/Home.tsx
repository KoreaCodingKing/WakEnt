import '../../assets/styles/home.scss';

const Home = () => {
    return (
        <div className="home_container">
            <section className="first_section">
                <div className="title_container">
                    <h2>WAK<small>.ENT</small></h2>
                </div>
                <div className="subtitle_container">
                    <p>WOOWAKGOOD WITH METABUS</p>
                </div>
                <div className="subtitle_container">
                    <p>다양한 컨텐츠 세상</p>
                </div>
                <div className="subtitle_container">
                    <p>레게노한 미래 지향 컨텐츠들</p>
                </div>
                <div className="subtitle_container">
                    <p>알작딱한 개인 방송 컨텐츠들</p>
                </div>
                <div className="subtitle_image_container">
                    
                </div>
                <div className="title_btn">
                    <div className="prev_btn"></div>
                    <div className="next_btn"></div>
                </div>
            </section>
            <section className="second_section">
                <div className="second_section_title">
                    <p>이세계 아이돌</p>
                    <button>보러가기</button>
                </div>
                <div className="background"></div>
            </section>
            <section className="second_section">
                <div className="second_section_title">
                    <p>고정 멤버</p>
                    <button>보러가기</button>
                </div>
                <div className="background"></div>
            </section>
            {/* todo: create navigation bar
            <div className="navigations">
                
            </div>
             */}
        </div>
    )
}

export default Home;