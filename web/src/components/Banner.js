import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Hoşgeldiniz", "Welcome", "Benvenuto" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Comodo Bee</span>
                <h1>{`Otonom Arıcılığa`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Hoşgeldiniz", "Welcome", "Benvenuto" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Comodo Bee; arıcılıkta insan gücünü minimize ederek enerji ve zamandan tasarruf sağlayan yenilikçi bir otonom arı kovanı sistemidir. Sensörler ve tek kartlı bilgisayarlarla donatılmış bu akıllı kovan, sıcaklık, nem, bal hasadı ve arı sağlığı gibi kritik süreçleri otomatik olarak yönetir. Kullanıcılar, mobil uygulama üzerinden kovanlarını uzaktan takip edip kontrol edebilirler. Comodo Bee, arıcılığı daha verimli, sürdürülebilir ve teknolojik hale getirmek için geliştirilmiştir.</p>
                  <button onClick={() => console.log('connect')}>Bizimle İletişime Geçin! <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
