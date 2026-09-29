import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  AudioLines,
  Cpu,
  Database,
  MapPin,
  Radio,
  Stethoscope,
  Thermometer,
  Truck,
  WifiOff,
} from "lucide-react";
import heroAsset from "@/assets/elba-hero.jpg.asset.json";
import explodedAsset from "@/assets/elba-exploded.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ELBA — помощь начинается даже без интернета" },
      {
        name: "description",
        content:
          "Портативное устройство для первичной оценки состояния и передачи результатов в медпункт по радиоканалу.",
      },
      { property: "og:title", content: "ELBA — помощь начинается даже без интернета" },
      {
        property: "og:description",
        content:
          "Измерение основных показателей, локальная обработка и передача данных по LoRa без сотовой сети.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: Activity,
    title: "Основные показатели",
    text: "Пульс, SpO₂ и температура — в одном компактном устройстве.",
  },
  {
    icon: Radio,
    title: "Радиосвязь LoRa",
    text: "Краткие записи передаются на локальный приёмный узел.",
  },
  {
    icon: Cpu,
    title: "Локальная оценка",
    text: "ESP32-S3 и экспериментальный TinyML-классификатор помогают определить срочность.",
  },
  {
    icon: AudioLines,
    title: "Понятный интерфейс",
    text: "Голосовые подсказки и визуальная обратная связь сопровождают пользователя.",
  },
  {
    icon: Database,
    title: "Сохранение данных",
    text: "Результаты остаются на локальном приёмном узле для дальнейшей работы.",
  },
];

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#top" className="text-2xl font-bold tracking-normal" aria-label="ELBA — наверх">
            ELBA<span className="text-primary">.</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Основная навигация">
            <a className="transition-colors hover:text-primary" href="#system">Как работает</a>
            <a className="transition-colors hover:text-primary" href="#features">Возможности</a>
            <a className="transition-colors hover:text-primary" href="#audience">Для кого</a>
          </nav>
          <a className="inline-flex h-11 items-center gap-2 border border-foreground px-5 text-sm font-semibold transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground" href="#contact">
            Стать партнёром <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </header>

      <section id="top" className="relative min-h-[92svh] pt-28 lg:pt-32">
        <div className="hero-shape" aria-hidden="true" />
        <div className="mx-auto grid min-h-[calc(92svh-8rem)] max-w-7xl items-center gap-8 px-6 pb-14 lg:grid-cols-[1.02fr_.98fr] lg:px-10">
          <div className="relative z-10 max-w-2xl animate-rise">
            <div className="mb-8 inline-flex items-center gap-2 border border-border bg-background/80 px-3 py-2 text-xs font-semibold uppercase text-muted-foreground backdrop-blur-sm">
              <span className="size-2 rounded-full bg-primary" /> Концепция медицинского устройства
            </div>
            <h1 className="text-balance text-5xl font-bold leading-[1.03] sm:text-6xl lg:text-7xl">
              Помощь начинается<br />даже без <span className="text-primary">интернета</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              ELBA измеряет основные показатели, оценивает срочность и передаёт результат в медпункт по радиоканалу.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex h-14 items-center justify-center gap-3 bg-primary px-7 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5" href="#system">
                Узнать, как это работает <ArrowDown className="size-4" aria-hidden="true" />
              </a>
              <div className="inline-flex h-14 items-center gap-3 border border-border px-5 text-sm font-medium">
                <WifiOff className="size-5 text-primary" aria-hidden="true" /> Без сотовой сети
              </div>
            </div>
          </div>
          <div className="relative z-10 flex h-full min-h-[420px] items-end justify-center lg:justify-end">
            <img className="product-float w-full max-w-[610px] object-contain mix-blend-multiply" src={heroAsset.url} alt="Портативное устройство ELBA" />
            <div className="absolute bottom-6 right-0 hidden border-l-2 border-primary bg-background/90 px-5 py-3 text-sm backdrop-blur-sm sm:block lg:right-6">
              <strong className="block">Компактно. Автономно.</strong>
              <span className="text-muted-foreground">Для работы вдали от инфраструктуры</span>
            </div>
          </div>
        </div>
      </section>

      <section id="system" className="bg-foreground py-24 text-background sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="section-kicker text-primary">Простой принцип</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">Три шага от измерения до медпункта</h2>
            </div>
            <div className="grid border-t border-background/25 sm:grid-cols-3">
              {[
                ["01", "Сбор показателей", "Устройство получает пульс, SpO₂ и температуру."],
                ["02", "Локальная обработка", "Данные предварительно оцениваются на устройстве."],
                ["03", "Передача по радио", "Краткая запись уходит на приёмный узел по LoRa."],
              ].map(([number, title, text]) => (
                <article key={number} className="border-b border-background/25 py-7 sm:border-l sm:px-6">
                  <span className="font-mono text-sm text-primary">{number}</span>
                  <h3 className="mt-8 text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-background/65">{text}</p>
                </article>
              ))}
            </div>
          </div>
          <p className="mt-12 max-w-3xl border-l-2 border-primary pl-5 text-sm leading-relaxed text-background/70">
            Основной сценарий не требует интернета или сотовой сети. Для передачи необходима радиосвязь с приёмным узлом.
          </p>
        </div>
      </section>

      <section id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="section-kicker">Возможности</p>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Всё необходимое — внутри</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Продуманная архитектура для первичной оценки там, где привычная связь недоступна.</p>
          </div>
          <div className="mt-14 grid border-t border-border md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="group border-b border-border py-8 md:px-8 md:first:pl-0 lg:min-h-64 lg:border-r lg:last:border-r-0">
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="size-6" /></span>
                  <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                </div>
                <h3 className="mt-9 text-xl font-semibold">{title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div className="order-2 lg:order-1">
            <img className="w-full mix-blend-multiply" src={explodedAsset.url} alt="Концептуальная компоновка компонентов ELBA" />
            <p className="mt-3 text-xs text-muted-foreground">Концептуальная компоновка. Расположение компонентов уточняется.</p>
          </div>
          <div className="order-1 lg:order-2 lg:pl-12">
            <p className="section-kicker">Основа системы</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">Технология, которая остаётся рядом</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Вычислительный модуль, радиоканал и голосовой интерфейс объединены в автономном корпусе. Данные обрабатываются локально и остаются доступными на приёмном узле.</p>
            <div className="mt-9 grid grid-cols-2 gap-px bg-border">
              <div className="bg-secondary p-5"><Cpu className="size-5 text-primary" /><strong className="mt-3 block text-sm">ESP32-S3</strong></div>
              <div className="bg-secondary p-5"><Radio className="size-5 text-primary" /><strong className="mt-3 block text-sm">LoRa</strong></div>
              <div className="bg-secondary p-5"><Thermometer className="size-5 text-primary" /><strong className="mt-3 block text-sm">3 показателя</strong></div>
              <div className="bg-secondary p-5"><AudioLines className="size-5 text-primary" /><strong className="mt-3 block text-sm">Голосовые подсказки</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section id="audience" className="py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="section-kicker">Для кого</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold sm:text-5xl">Там, где каждая минута имеет значение</h2>
          <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
            {[
              [Stethoscope, "Фельдшерские пункты", "Дополнительный инструмент для первичной оценки состояния."],
              [Truck, "Выездные бригады", "Передача краткой записи до возвращения в зону покрытия."],
              [MapPin, "Удалённые населённые пункты", "Связь с локальным медпунктом без сотовой инфраструктуры."],
            ].map(([Icon, title, text]) => {
              const IconComponent = Icon as typeof Stethoscope;
              return <article key={title as string} className="bg-background p-8 sm:p-10"><IconComponent className="size-8 text-primary" /><h3 className="mt-12 text-xl font-semibold">{title as string}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text as string}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="relative bg-primary py-24 text-primary-foreground sm:py-28">
        <div className="signal-rings" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest">Открыты к сотрудничеству</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-6xl">Создадим работающий прототип вместе</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">Ищем клинических и технологических партнёров для разработки прототипа и подготовки пилотных испытаний.</p>
          </div>
          <a className="inline-flex h-14 items-center justify-center gap-3 bg-foreground px-7 text-sm font-bold text-background transition-transform hover:-translate-y-0.5" href="mailto:rodriguezk@internet.ru">
            Обсудить сотрудничество <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      <section className="border-b border-border py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[.35fr_.65fr] lg:px-10">
          <h2 className="text-2xl font-bold">Текущий статус</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">Подготовлены концепция и архитектура системы. Точность измерений, дальность связи и качество классификации предстоит проверить. Клиническая эффективность не установлена.</p>
        </div>
      </section>

      <footer className="py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <strong className="text-xl">ELBA<span className="text-primary">.</span></strong>
          <p className="text-muted-foreground">Концепция устройства для первичной оценки состояния</p>
          <a className="font-medium hover:text-primary" href="mailto:rodriguezk@internet.ru">rodriguezk@internet.ru</a>
        </div>
      </footer>
    </main>
  );
}