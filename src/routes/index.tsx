import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  AudioLines,
  Building2,
  Cpu,
  Database,
  HeartPulse,
  Radio,
  Siren,
  Thermometer,
  WifiOff,
} from "lucide-react";

const images = {
  maria: "/images/maria-rusia.jpg",
  lucia: "/images/maria-rural.webp",
  russia: "/villa-russia-remote.jpeg",
  almeida: "/images/almeida-boyaca.webp",
  patient: "/images/abuela con elba.png",
  hospitalBefore: "/images/medico-muchos documentos.png",
  hospitalAfter: "/images/clinic-elba-sistem.png",
  family: "/images/elba y familia .png",
  phoneProblem: "/images/problematica-telefono-complejo-sin señal.png",
  exploded: "/images/elba-exploded.webp",
};
const heroFrames = Array.from(
  { length: 10 },
  (_, index) => `/images/video-frames/frame_${String(index + 1).padStart(3, "0")}.jpg`,
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ELBA — помощь начинается даже без интернета" },
      {
        name: "description",
        content:
          "Автономная интеллектуальная система домашнего мониторинга пациентов после операций на сердце.",
      },
      { property: "og:title", content: "ELBA — помощь начинается даже без интернета" },
      {
        property: "og:description",
        content:
          "Домашний мониторинг, локальная оценка риска и передача тревоги врачу по LoRa без интернета.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const cases = [
  {
    country: "Россия",
    place: "Сельская местность",
    name: "Мария, 64 года",
    image: images.maria,
    alt: "Мария возле дома в сельской местности России",
    text: "Неделю назад Марию выписали после операции на сердце. Она вернулась в загородный дом, где живёт одна.",
    distance: "2 часа пешком до ближайшего города или 40 минут на машине, когда есть транспорт.",
    question: "Что будет, если ей станет хуже там, где нет связи?",
  },
  {
    country: "Колумбия",
    place: "Бояка, горный район",
    name: "Лусия, 59 лет",
    image: images.lucia,
    alt: "Лусия возле дома в горной местности Колумбии",
    text: "Лусия живёт среди гор Бояки. Дорога к врачу занимает много времени, а мобильная связь нестабильна.",
    distance:
      "Расстояние и сложные горные дороги превращают контроль после лечения в редкую возможность.",
    question: "Та же медицинская уязвимость — на другом конце мира.",
  },
];

function ScrollHeroProduct() {
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    heroFrames.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
    let frame = -1;
    let animationFrame = 0;
    const update = () => {
      const image = imageRef.current;
      if (!image || reducedMotion) return;
      const progress = Math.min(
        1,
        Math.max(0, window.scrollY / Math.max(window.innerHeight * 0.55, 320)),
      );
      const nextFrame = 9 - Math.round(progress * 9);
      if (nextFrame !== frame) {
        frame = nextFrame;
        image.src = heroFrames[nextFrame]!;
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div className="hero-product-stage">
      <div className="hero-product-canvas">
        <div className="hero-video-label hero-video-label-left" aria-hidden="true">
          <Radio className="size-4" />
          <span>
            <small>Связь</small>LoRa · 868 МГц
          </span>
        </div>
        <div className="hero-video-label hero-video-label-right" aria-hidden="true">
          <Cpu className="size-4" />
          <span>
            <small>Оценка риска</small>TinyML · локально
          </span>
        </div>
        <img
          ref={imageRef}
          className="hero-product-frame"
          src={heroFrames[9]!}
          alt="Устройство ELBA — от собранного корпуса до внутренней архитектуры"
        />
      </div>
    </div>
  );
}

function CaseCarousel() {
  const [active, setActive] = useState(0);
  const current = cases[active]!;
  const show = (index: number) => setActive((index + cases.length) % cases.length);
  return (
    <div className="case-carousel">
      <div className="case-carousel-image">
        <img src={current.image} alt={current.alt} key={current.image} />
        <span>{current.place}</span>
      </div>
      <article className="case-carousel-copy" aria-live="polite">
        <div>
          <p className="section-kicker">{current.country}</p>
          <h3>{current.name}</h3>
          <p>{current.text}</p>
          <p>{current.distance}</p>
          <strong>{current.question}</strong>
        </div>
        <div className="case-carousel-controls">
          <div className="flex gap-2" aria-label="Выбор истории">
            {cases.map((item, index) => (
              <button
                key={item.country}
                className={index === active ? "is-active" : ""}
                onClick={() => show(index)}
                aria-label={`Показать историю: ${item.name}`}
                aria-pressed={index === active}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={() => show(active - 1)} aria-label="Предыдущая история">
              <ArrowLeft className="size-4" />
            </button>
            <button onClick={() => show(active + 1)} aria-label="Следующая история">
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#top" className="text-2xl font-bold" aria-label="ELBA — наверх">
            ELBA<span className="text-primary">.</span>
          </a>
          <nav
            className="hidden items-center gap-8 text-sm font-medium md:flex"
            aria-label="Навигация"
          >
            <a href="#problem">Проблема</a>
            <a href="#solution">Решение</a>
            <a href="#system">Как работает</a>
            <a href="#team">Команда</a>
          </nav>
          <a className="header-contact" href="#contact">
            <span className="hidden sm:inline">Стать партнёром</span>
            <span className="sm:hidden">Партнёрство</span>
            <ArrowRight className="size-4" />
          </a>
        </div>
      </header>

      <section id="top" className="hero-section relative pt-20">
        <div className="hero-shape" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-10">
          <div className="hero-copy relative z-10 max-w-2xl animate-rise">
            <div className="hero-eyebrow">
              <span /> Домашний мониторинг после операции
            </div>
            <h1>
              Помощь начинается
              <br />
              даже без <span>интернета</span>
            </h1>
            <p>
              ELBA следит за состоянием пациента дома, оценивает риск и сообщает врачу о тревоге —
              даже там, где нет интернета.
            </p>
            <div className="hero-actions">
              <a href="#solution">
                Как это работает <ArrowDown className="size-4" />
              </a>
              <span>
                <WifiOff className="size-5 text-primary" /> Без сотовой сети
              </span>
            </div>
            <div className="hero-facts">
              <div>
                <strong>4 показателя</strong>
                <span>за один замер</span>
              </div>
              <div>
                <strong>SOS</strong>
                <span>прямая тревога</span>
              </div>
              <div>
                <strong>Без облака</strong>
                <span>оценка на ELBA</span>
              </div>
            </div>
          </div>
          <ScrollHeroProduct />
        </div>
      </section>

      <section id="problem" className="section-space">
        <div className="page-shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Проблема и актуальность</p>
              <span>01</span>
            </div>
            <h2>
              Сердце болит везде.
              <br />
              Связь есть не везде.
            </h2>
            <p>
              Две страны, две сельские реальности и один вопрос: как продолжить наблюдение после
              выписки, если врач далеко?
            </p>
          </div>
          <CaseCarousel />
          <p className="mt-4 text-xs text-muted-foreground">
            Мария и Лусия — собирательные образы.
          </p>
          <div className="stats-strip">
            {[
              ["17,9 млн", "человек ежегодно умирают от болезней сердца и сосудов"],
              ["2,2 млрд", "человек в мире остаются без интернета"],
              ["58%", "сельских жителей пользуются интернетом — против 85% в городах"],
            ].map(([value, label]) => (
              <div key={value}>
                <strong>{value}</strong>
                <p>{label}</p>
              </div>
            ))}
          </div>
          <div className="locations-block">
            <div className="locations-intro">
              <p className="section-kicker">Это происходит в России и в мире</p>
              <h3>Расстояние решает, получит ли человек помощь</h3>
            </div>
            <div className="locations-grid">
              {[
                [
                  images.russia,
                  "Россия: Жилинда, Якутия",
                  "Крайний север",
                  "Около 10 000 населённых пунктов России остаются без качественной мобильной связи.",
                ],
                [
                  images.almeida,
                  "Альмейда, Колумбия",
                  "Горные дороги",
                  "Город и окрестные горы зависят от долгой дороги до медицинской помощи.",
                ],
              ].map(([image, title, tag, text]) => (
                <article key={title}>
                  <div>
                    <img src={image} alt={title} />
                    <span>{tag}</span>
                  </div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="urgency-section">
        <div className="page-shell urgency-grid">
          <div>
            <p className="section-kicker">Почему сейчас</p>
            <h2>Дистанционный надзор уже становится частью системы</h2>
          </div>
          <div className="urgency-points">
            <div>
              <strong>+36%</strong>
              <span>рост кардиохирургии в России</span>
            </div>
            <div>
              <strong>34%</strong>
              <span>пациентов потребовали вмешательства за 21 день мониторинга</span>
            </div>
            <div>
              <strong>ОМС</strong>
              <span>дистанционный надзор включён в государственные гарантии</span>
            </div>
          </div>
          <div className="urgency-note">
            <img src={images.phoneProblem} alt="Сложность связи для пожилого человека" />
            <p>
              <strong>Технологический суверенитет.</strong> Локальная обработка не зависит от
              зарубежных облаков и продолжает работать при отключениях интернета.
            </p>
          </div>
        </div>
      </section>

      <section id="solution" className="section-space">
        <div className="page-shell">
          <div className="section-heading section-heading-wide">
            <div>
              <p className="section-kicker">Идея проекта</p>
              <span>02</span>
            </div>
            <h2>ELBA продолжает наблюдение дома</h2>
            <p>
              Устройство создано для пациентов после операций на сердце. Клиент системы — больница
              или кардиоцентр, который выписывает пациента.
            </p>
          </div>
          <div className="solution-steps">
            {[
              [
                Activity,
                "01",
                "Измеряет",
                "Пульс, кислород в крови, артериальное давление и температуру. Голос напоминает о замере.",
              ],
              [
                Cpu,
                "02",
                "Оценивает",
                "Малая нейросеть на устройстве определяет цветовой уровень риска без облака.",
              ],
              [
                Siren,
                "03",
                "Оповещает",
                "При красном уровне или по кнопке SOS отправляет сигнал клиническому персоналу.",
              ],
            ].map(([Icon, number, title, text]) => {
              const StepIcon = Icon as typeof Activity;
              return (
                <article key={number as string}>
                  <span>{number as string}</span>
                  <StepIcon />
                  <h3>{title as string}</h3>
                  <p>{text as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="value-section">
        <div className="page-shell">
          <div className="section-heading inverse-heading">
            <div>
              <p className="section-kicker">Ценностное предложение</p>
              <span>03</span>
            </div>
            <h2>Что получают пациент, больница и система здравоохранения</h2>
          </div>
          <div className="value-grid">
            {[
              [
                images.patient,
                "Пациент",
                "Остаётся один дома и не может быстро сообщить врачу, что ему хуже.",
                "Наблюдение продолжается дома, тревога доходит до врача без интернета.",
              ],
              [
                images.hospitalBefore,
                "Больница",
                "Теряет пациента из виду после выписки и не знает, кому звонить первым.",
                "Получает данные и список пациентов по уровню приоритета.",
              ],
              [
                images.hospitalAfter,
                "Система здравоохранения",
                "Дальние районы остаются вне дистанционного наблюдения.",
                "Наблюдение доходит туда, где нет сети.",
              ],
            ].map(([image, title, before, after]) => (
              <article key={title}>
                <img src={image} alt={title} />
                <div>
                  <span>Без ELBA</span>
                  <p>{before}</p>
                  <span>С ELBA</span>
                  <strong>{after}</strong>
                </div>
                <h3>{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="system" className="system-section">
        <div className="page-shell">
          <div className="section-heading inverse-heading">
            <div>
              <p className="section-kicker">Как это работает</p>
              <span>04</span>
            </div>
            <h2>Четыре шага от пациента до врача</h2>
          </div>
          <div className="system-steps">
            {[
              [
                HeartPulse,
                "01",
                "Измерение",
                "Датчики снимают пульс, кислород, давление и температуру. Голос ведёт пациента.",
                "MAX30102 · DS18B20",
              ],
              [
                Cpu,
                "02",
                "Оценка на устройстве",
                "TinyML сравнивает показатели и присваивает уровень риска. Облако не нужно.",
                "TinyML · ESP32-S3",
              ],
              [
                Radio,
                "03",
                "Радиосигнал",
                "Короткий пакет идёт на километры без интернета и сотовой связи.",
                "LoRa · 868 МГц",
              ],
              [
                Building2,
                "04",
                "Приём в больнице",
                "Шлюз ведёт журнал. Врач видит, кого смотреть первым.",
                "шлюз · microSD",
              ],
            ].map(([Icon, number, title, text, tech]) => {
              const StepIcon = Icon as typeof HeartPulse;
              return (
                <article key={number as string}>
                  <div>
                    <span>{number as string}</span>
                    <StepIcon />
                  </div>
                  <h3>{title as string}</h3>
                  <p>{text as string}</p>
                  <small>{tech as string}</small>
                </article>
              );
            })}
          </div>
          <p className="signal-packet">
            В сигнале: номер устройства, время, пульс, кислород, температура и уровень риска.
            Красный уровень означает звонок или вызов.
          </p>
        </div>
      </section>

      <section className="architecture-section">
        <div className="page-shell architecture-grid">
          <div>
            <img src={images.exploded} alt="Компоненты устройства ELBA" />
            <small>Концептуальная компоновка. Расположение компонентов уточняется.</small>
          </div>
          <div>
            <p className="section-kicker">Архитектура</p>
            <h2>Автономность внутри корпуса</h2>
            <p>
              Вычислительный модуль, радиоканал и голосовой интерфейс объединены в одном устройстве.
              Обработка выполняется локально.
            </p>
            <dl>
              {[
                [Cpu, "ESP32-S3", "вычисление"],
                [Radio, "LoRa", "связь"],
                [Thermometer, "4 показателя", "мониторинг"],
                [AudioLines, "Голос", "сопровождение"],
                [Database, "microSD", "журнал"],
              ].map(([Icon, title, text]) => {
                const TechIcon = Icon as typeof Cpu;
                return (
                  <div key={title as string}>
                    <TechIcon />
                    <dt>{title as string}</dt>
                    <dd>{text as string}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="page-shell closing-grid">
          <img src={images.family} alt="Мария с семьёй и устройством ELBA" />
          <div>
            <p className="section-kicker">Человеческое значение</p>
            <h2>Пусть помощь будет рядом, даже когда нет связи.</h2>
            <p>
              Мария и миллионы людей живут далеко от больниц. Здоровье не должно зависеть от того,
              где человек живёт.
            </p>
          </div>
        </div>
      </section>
      <section id="contact" className="contact-band">
        <div className="page-shell contact-band-inner">
          <div>
            <p>Партнёрство</p>
            <h2>Разработаем и проверим прототип вместе</h2>
          </div>
          <a href="mailto:rodriguezk@internet.ru">
            Обсудить сотрудничество <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      <section className="status-section">
        <div className="page-shell status-grid">
          <h2>Текущий статус</h2>
          <p>
            Подготовлены концепция и архитектура системы. Точность измерений, дальность связи и
            качество классификации предстоит проверить. Клиническая эффективность не установлена.
          </p>
        </div>
      </section>

      <footer id="team" className="site-footer">
        <div className="page-shell">
          <div className="footer-top">
            <div>
              <strong>
                ELBA<span>.</span>
              </strong>
              <p>Автономная интеллектуальная система мониторинга состояния пациентов</p>
            </div>
            <p>Команда проекта</p>
          </div>
          <div className="team-grid">
            <article>
              <span>01</span>
              <h3>
                Кевин Алехандро
                <br />
                Родригес Санчес
              </h3>
              <a href="mailto:rodriguezk@internet.ru">rodriguezk@internet.ru</a>
            </article>
            <article>
              <span>02</span>
              <h3>
                Георгий
                <br />
                Новиков
              </h3>
              <a href="mailto:Nagosha55@gmail.com">Nagosha55@gmail.com</a>
            </article>
          </div>
          <div className="footer-bottom">
            <span>ELBA · Стартапы ЛЭТИ 2026</span>
            <a href="#top">Наверх ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
