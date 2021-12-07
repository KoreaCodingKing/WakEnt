import { useEffect, useRef } from 'react';
import '../../assets/styles/home.scss';
import Footer from '../footer/footer';

const Home = () => {
    //const [scrollIndex, setScrollIndex] = useState(1);
    const homeRef = useRef(undefined);
    useEffect(() => {
        const wheelHandler = (event: any) => {
            event.preventDefault();
            const { deltaY } = event;
            const { scrollTop } = homeRef.current;
            const pageHeight = window.innerHeight;

            if(deltaY > 0) {
                if(scrollTop >= 0 && scrollTop < pageHeight) {
                    console.log('현재 페이지 1, down');
                    homeRef.current.scrollTo({
                        top: pageHeight,
                        left: 0,
                        behavior: 'smooth'
                    });
                } else if(scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    homeRef.current.scrollTo({
                        top: pageHeight*2,
                        left: 0,
                        behavior: 'smooth'
                    });
                } else if(scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
                    console.log('마지막')
                    homeRef.current.scrollTo({
                        top: pageHeight*3,
                        left: 0,
                        behavior: "smooth"
                    })
                } else {
                    return;
                }
            } else {
                if(scrollTop >=0 && scrollTop < pageHeight) {
                    return;
                } else if(scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    homeRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    });
                } else if(scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
                    homeRef.current.scrollTo({
                        top: pageHeight,
                        left: 0,
                        behavior: 'smooth'
                    });
                } else {
                    homeRef.current.scrollTo({
                        top: pageHeight*2,
                        left: 0,
                        behavior: 'smooth'
                    });
                }
            }
        };

        const homeCurrentRef = homeRef.current;
        homeCurrentRef.addEventListener("wheel", wheelHandler);

        return () => {
            homeCurrentRef.removeEventListener("wheel", wheelHandler);
        }
    }, []);
    return (
        <div className="home_container" ref={homeRef}>
            <section className="first_section">
                <div className="section_inner_container first_section_inner">
                    <div className="title_wrapper">
                        <h2>WAK<small>.ENT</small></h2>
                        <div className="subtitle_wrapper">
                            <p>WOOWAKGOOD WITH METABUS</p>
                        </div>
                        <div className="subtitle_wrapper">
                            <p>다양한 컨텐츠 세상</p>
                            <p>컨텐츠를 만들어가고 다양한 컨텐츠를 창조합니다.</p>
                        </div>
                        <div className="subtitle_wrapper">
                            <p>레게노한 미래 지향 컨텐츠들</p>
                            <p>메타버스의 시대를 맞춘 새로운 컨텐츠를 선사드립니다.</p>
                        </div>
                        <div className="subtitle_wrapper">
                            <p>알작딱한 개인 방송 컨텐츠들</p>
                            <p>남녀노소 누구나 즐길 수 있는 창조적인 컨텐츠를 만들어갑니다.</p>
                        </div>
                    </div>
                    <div className="subtitle_image_container">
                        <div className="subtitle_first_image"></div>
                        <div className="subtitle_second_image"></div>
                        <div className="subtitle_third_image"></div>
                    </div>
                    <div className="title_btn">
                        <div className="prev_btn"></div>
                        <div className="next_btn"></div>
                    </div>
                </div>
            </section>
            <section className="second_section">
                <div className="section_inner_container">
                    <div className="second_section_title">
                        <p>이세계 아이돌</p>
                        <button>보러가기</button>
                    </div>
                    <div className="background"></div>
                </div>
            </section>
            <section className="third_section">
                <div className="section_inner_container">
                    <div className="third_section_title">
                        <p>고정 멤버</p>
                        <button>보러가기</button>
                    </div>
                    <div className="background"></div>
                </div>
            </section>
             <section className="forth_section">
                 <Footer />
             </section>
            {/* todo: create navigation bar
            <div className="navigations">
                
            </div>
             */}
        </div>
    )
}

export default Home;