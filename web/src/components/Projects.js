import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div
                  className={`${isVisible ? "animate__animated animate__fadeIn" : ""}`}
                  style={{
                    maxWidth: "800px",
                    margin: "0 auto",
                    textAlign: "center",
                    padding: "2rem",
                    lineHeight: "1.6",
                  }}
                >
                  <h2>Comodo Bee ile Arıcılıkta Devrim</h2>

                  <h3>Arıcılığın Geleceği: Comodo Bee ile Tanışın! 🐝📱</h3>
                  <p><strong>Zamandan tasarruf, daha fazla bal, daha az iş gücü!</strong></p>

                  <p>
                    <strong>Comodo Bee</strong>, geleneksel arıcılığın sınırlarını aşarak sizi
                    geleceğe taşıyan <strong>akıllı ve otonom bir arı kovanı sistemidir</strong>.
                    Sensörlerle donatılmış bu yenilikçi teknoloji, sıcaklık, nem, bal doluluk
                    oranı ve arı sağlığı gibi tüm kritik süreçleri sizin yerinize 7/24 izler ve
                    yönetir.
                  </p>

                  <h4>🧠 Neden Comodo Bee?</h4>
                  <ul style={{ textAlign: "left", margin: "1rem auto", maxWidth: "700px" }}>
                    <li><strong>Zahmetsiz Takip:</strong> Her sabah kovan başına gitmek zorunda değilsiniz. Tüm veriler cebinizde, mobil uygulamanızda!</li>
                    <li><strong>Doğru Zamanlama = Daha Fazla Verim:</strong> Bal hasadı için en uygun zamanı kaçırmazsınız. Sistem sizi bilgilendirir, siz sadece toplarsınız.</li>
                    <li><strong>Arı Sağlığını Anında Takip Edin:</strong> Olası hastalıkları ya da kovan içi sorunları erkenden tespit ederek koloni kayıplarını önleyin.</li>
                    <li><strong>İş Gücü ve Maliyet Azalır:</strong> Fiziksel kontrol sayısı azaldıkça, hem iş gücünden hem de ulaşım masraflarından ciddi anlamda tasarruf edersiniz.</li>
                    <li><strong>Sürdürülebilir ve Modern Arıcılık:</strong> Geleneksel yöntemlere dijital dokunuş katarak işinizi geleceğe taşıyın.</li>
                  </ul>

                  <h4>💰 Kazancınız Ne Olur?</h4>
                  <ul style={{ textAlign: "left", margin: "1rem auto", maxWidth: "700px" }}>
                    <li><strong>%30’a varan zaman tasarrufu</strong> sayesinde daha fazla kovana aynı anda bakabilirsiniz.</li>
                    <li><strong>%20’ye kadar bal üretim artışı</strong> ile tek sezonda yatırımı çıkarma imkânı.</li>
                    <li><strong>Erken teşhis ve müdahale</strong> ile koloni kaybını azaltıp her arının değerini korursunuz.</li>
                    <li><strong>Veriye dayalı kararlar</strong> sayesinde sezonda risk almaz, isabetli adımlar atarsınız.</li>
                  </ul>

                  <p>
                    <strong>Comodo Bee</strong> ile hem doğaya saygılı kalın hem de teknolojinin
                    gücünden faydalanın. Arıcılığı daha kârlı, daha güvenli ve çok daha kolay
                    hale getirin!
                  </p>
                </div>

              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
