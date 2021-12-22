import { useEffect, useRef } from 'react';
import '../../assets/styles/home.scss';

import bgIne from '../../assets/images/bg_ine.jpg';
import bgJing from '../../assets/images/bg_jingburger.jpg';
import bgLilpa from '../../assets/images/bg_lilpa.jpg';
import bgJururu from '../../assets/images/bg_jururu.jpg';
import bgGosegu from '../../assets/images/bg_gosegu.jpg';
import bgVichan from '../../assets/images/bg_vichan.jpg';

const Home = () => {
    const homeRef = useRef(undefined);
    const mainTitleRef = useRef(undefined);
    const mainSubTitleRef = useRef(undefined);

    useEffect(() => {
        const wheelHandler = (event: any) => {
            event.preventDefault();
            const { deltaY } = event;
            const { scrollTop } = homeRef.current;
            const pageHeight = window.innerHeight;

            if (mainTitleRef.current.classList.contains('down_scroll_title')) {
                mainTitleRef.current.classList.remove('down_scroll_title');
            }

            if (mainSubTitleRef.current.classList.contains('down_scroll_subtitle')) {
                mainSubTitleRef.current.classList.remove('down_scroll_subtitle');
            }

            if(deltaY > 0) {
                if(scrollTop >= 0 && scrollTop < pageHeight) {
                    mainTitleRef.current.classList.add('down_scroll_title');
                    mainSubTitleRef.current.classList.add('down_scroll_subtitle');

                    setTimeout(() => {
                        homeRef.current.scrollTo({
                            top: pageHeight,
                            left: 0,
                            behavior: 'smooth'
                        });
                    }, 500);
                } else if(scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
                    homeRef.current.scrollTo({
                        top: pageHeight*2,
                        left: 0,
                        behavior: 'smooth'
                    });
                } else if(scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
                    homeRef.current.scrollTo({
                        top: pageHeight*3,
                        left: 0,
                        behavior: "smooth"
                    });
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
            clearTimeout();
        };
    }, []);

    return (
        <div className="home_container" ref={homeRef}>
            <section className="first_section">
                <div className="section_inner_container">
                    <div className="first_section_inner">
                        <div className="title_wrapper">
                            <h2 className="main_title" ref={mainTitleRef}>
                                WAK<small>.ENT</small></h2>
                            <div className="subtitle_box" ref={mainSubTitleRef}>
                                <ul className="subtitle_wrapper">
                                    <li className="subtitle_wrapper">
                                        <p>WOOWAKGOOD WITH METABUS</p>
                                    </li>
                                    <li className="subtitle_wrapper">
                                        <p className="subtitle_first_line">다양한 컨텐츠 세상</p>
                                        <p>컨텐츠를 만들어가고 다양한 컨텐츠를 창조합니다.</p>
                                    </li>
                                    <li className="subtitle_wrapper">
                                        <p className="subtitle_first_line">미래 지향 컨텐츠들</p>
                                        <p>메타버스의 시대를 맞춘 새로운 컨텐츠를 선사드립니다.</p>
                                    </li>
                                    <li className="subtitle_wrapper">
                                        <p className="subtitle_first_line">누구나 즐기는 컨텐츠</p>
                                        <p>남녀노소 누구나 즐길 수 있는 창조적인 컨텐츠를 만들어갑니다.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="background_wrapper"></div>
                    </div>
                </div>
            </section>
            <section className="second_section">
                <div className="section_inner_container">
                    <div className="right_images_wrapper">
                        <div className="upper_wrapper">
                            <img src={bgIne} alt="아이네 캐릭터 아트" />
                            <div className="blank"></div>
                            <img src={bgJing} alt="징버거 캐릭터 아트" />
                        </div>
                        <div className="lower_wrapper">
                            <div className="blank"></div>
                            <img src={bgGosegu} alt="고세구 캐릭터 아트" />
                            <div className="blank"></div>
                        </div>
                    </div>
                    <div className="second_section_title"></div>
                    <div className="background"></div>
                    <div className="left_images_wrapper">
                        <div className="upper_wrapper">
                            <div className="blank"></div>
                            <img src={bgLilpa} alt="고세구 캐릭터 아트" />
                            <div className="blank"></div>
                        </div>
                        <div className="lower_wrapper">
                            <img src={bgJururu} alt="아이네 캐릭터 아트" />
                            <div className="blank"></div>
                            <img src={bgVichan} alt="징버거 캐릭터 아트" />
                        </div>
                    </div>
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
            {/* todo: create navigation bar
            <div className="navigations">
                
            </div>
             */}
        </div>
    );
};

export default Home;