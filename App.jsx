import { useState } from 'react'

export default function App() {
  const [selectedLevel, setSelectedLevel] = useState('A1')

  const whyMe = [
    {
      title: '9 лет преподавания польского',
      text: 'Я преподаю польский язык уже 9 лет. Изучала его на филологическом факультете БГУ, ездила в Польшу по программам обмена и работала в разных языковых школах.',
    },
    {
      title: 'Комфортная атмосфера на занятиях',
      text: 'Со мной не страшно ошибаться. На занятиях спокойно, уютно и без давления. Я учитываю, что именно помогает моим ученикам усваивать материал легче.',
    },
    {
      title: 'Гибкий подход под ваш запрос',
      text: 'Хотите больше разговорной практики — сделаем упор на речь. Нужны интерактивные квизы — они у меня есть. Нужен грамматический интенсив — организуем.',
    },
    {
      title: 'Результаты, которыми можно гордиться',
      text: '100+ учеников успешно прошли собеседование на Карту поляка, сдали экзамены в польские университеты, а некоторые позже и сами стали преподавателями польского.',
    },
  ]

  const experience = [
    'Филологический факультет БГУ',
    'Программы обмена в Польше',
    'Работа в школах Realway и «Центр славянских языков и культур»',
    'Корпоративный преподаватель польского для релокантов в Itransition',
    'Успешное трудоустройство в Streamline',
  ]

  const groupBenefits = [
    {
      title: 'Внимание каждому',
      text: 'Мини-группа — это формат, где времени хватает на каждого участника. Группа небольшая, поэтому никто не теряется и не остаётся без обратной связи.',
    },
    {
      title: 'Живой диалог, а не только формат “учитель — ученик”',
      text: 'Вы учитесь понимать польскую речь и выстраивать диалог не только со мной, но и с другими участниками группы.',
    },
    {
      title: 'Доступнее, чем языковые центры',
      text: 'Стоимость заметно ниже, чем в языковых школах, при этом сохраняются все важные преимущества: структура, материалы, формат и методическая база.',
    },
  ]

  const details = [
    'Уровни: с нуля до B2',
    'Формат: онлайн мини-группы',
    'Размер группы: до 4 человек',
    'Время: 10:00 по Минску в будние дни',
    'Время можно обсуждать',
    '80 минут — 25 руб. с человека',
    'Первое занятие бесплатно',
    'Платформа: Google Meet',
  ]

  const levelButtons = [
    { label: 'A1', note: 'для начинающих с нуля' },
    { label: 'A2', note: 'если база уже есть' },
    { label: 'B1', note: 'для уверенного среднего уровня' },
    { label: 'B2', note: 'для продвинутого уровня' },
  ]

  const faqs = [
    {
      q: 'Можно ли прийти совсем с нуля?',
      a: 'Да. Я набираю группы для уровней от 0 до B2, поэтому можно начать даже без предварительной подготовки.',
    },
    {
      q: 'Это только утренние группы?',
      a: 'Сейчас я набираю именно утренние мини-группы. Ориентир — 10:00 по Минску в будние дни, но время можно обсуждать.',
    },
    {
      q: 'Сколько человек в группе?',
      a: 'До 4 человек. Это позволяет сохранить живую групповую динамику и при этом уделить внимание каждому.',
    },
    {
      q: 'Есть ли пробное занятие?',
      a: 'Да, первое занятие бесплатно.',
    },
  ]

  const telegramUsername = 'annetteem'

  const getTelegramLink = (level) => {
    const text = `Здравствуйте! Хочу записаться в мини-группу по польскому, уровень ${level}.`
    return `https://t.me/${telegramUsername}?text=${encodeURIComponent(text)}`
  }

  const handleLevelPick = (level) => {
    setSelectedLevel(level)
    setTimeout(() => {
      const formBlock = document.getElementById('lead-form')
      if (formBlock) {
        formBlock.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 0)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(
      `Пока форма работает как визуальная заготовка. Вы выбрали уровень ${selectedLevel}. Следующим шагом подключим реальную отправку заявок.`
    )
  }

  return (
    <div className="page">
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="badge">Witam! Утренние мини-группы по польскому онлайн</div>
            <h1>
              Польский язык в
              <span> уютной мини-группе</span>
            </h1>
            <p className="hero-text">
              Меня зовут Анна. Я набираю онлайн мини-группы для тех, кто хочет
              изучать польский спокойно, системно и в комфортной атмосфере.
              Уровни — от 0 до B2.
            </p>

            <div className="hero-buttons">
              <a href="#lead-form" className="btn btn-primary">
                Записаться через сайт
              </a>
              <a href={getTelegramLink(selectedLevel)} className="btn btn-secondary" target="_blank" rel="noreferrer">
                Написать в Telegram
              </a>
            </div>

            <div className="stats">
              <div className="card stat">
                <div className="stat-number">9 лет</div>
                <div className="stat-label">опыта</div>
              </div>
              <div className="card stat">
                <div className="stat-number">100+</div>
                <div className="stat-label">учеников</div>
              </div>
              <div className="card stat">
                <div className="stat-number">до 4</div>
                <div className="stat-label">человек в группе</div>
              </div>
              <div className="card stat">
                <div className="stat-number">бесплатно</div>
                <div className="stat-label">первое занятие</div>
              </div>
            </div>

            <div className="mt">
              <div className="section-label">Быстрая запись по уровню</div>
              <div className="level-grid">
                {levelButtons.map((level) => (
                  <button
                    key={level.label}
                    type="button"
                    className="level-button"
                    onClick={() => handleLevelPick(level.label)}
                  >
                    <div className="level-title">{level.label}</div>
                    <div className="level-note">{level.note}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="card dark-card">
              <div className="small-title">Почему ко мне</div>
              <h2>Профессионально, бережно и без страха ошибок</h2>
              <p>
                Я — комфортный преподаватель. На моих занятиях уютная атмосфера,
                в которой проще говорить, пробовать, ошибаться и постепенно
                выходить на хороший уверенный уровень.
              </p>

              <div className="check-list">
                <div>✓ От начинающих до уровня B2</div>
                <div>✓ Индивидуальное внимание в мини-группе</div>
                <div>✓ Разговорная практика, квизы и грамматика — под ваш запрос</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <p className="section-label">Об Анне</p>
              <h2>Опытный преподаватель польского с тёплой подачей и сильной базой</h2>
              <p className="section-text">
                Я преподаю польский уже 9 лет. Изучала его на филологическом
                факультете БГУ, ездила в Польшу по программам обмена, работала в
                языковых школах и в корпоративном формате.
              </p>
            </div>

            <div className="card">
              <div className="card-title">Опыт и профессиональный путь</div>
              <div className="list">
                {experience.map((item) => (
                  <div key={item} className="list-item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid-4 mt">
            {whyMe.map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="two-col">
            <div>
              <p className="section-label">Почему мини-группы</p>
              <h2>Комфортный формат, в котором хватает внимания и практики</h2>
            </div>
            <div className="section-text">
              Мини-группа — это золотая середина между индивидуальными занятиями
              и большими потоками. Здесь сохраняется структура и качество, но при
              этом остаётся живое общение и доступная стоимость.
            </div>
          </div>

          <div className="grid-3 mt">
            {groupBenefits.map((item) => (
              <div key={item.title} className="card soft-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="details" className="section">
        <div className="container two-col">
          <div>
            <p className="section-label">Детали</p>
            <h2>Всё, что важно знать перед записью</h2>
            <p className="section-text">
              Занятия проходят онлайн на Google Meet. Я присылаю свои
              презентации и делюсь некоторыми учебниками, чтобы у вас оставались
              материалы для повторения и самостоятельной практики.
            </p>
          </div>

          <div className="card dark-card">
            <div className="list">
              {details.map((item) => (
                <div key={item} className="list-item dark-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container two-col">
          <div>
            <p className="section-label light">Результаты</p>
            <h2 className="light-text">
              Мои ученики не просто учат язык — они приходят к конкретным целям
            </h2>
            <p className="section-text light-text soft">
              За эти годы мои ученики проходили собеседование на Карту поляка,
              поступали в польские университеты и выстраивали с польским языком
              уже профессиональные отношения.
            </p>
          </div>

          <div className="list">
            <div className="list-item dark-item">
              Успешное прохождение собеседований на Карту поляка
            </div>
            <div className="list-item dark-item">
              Подготовка к поступлению и экзаменам в польские университеты
            </div>
            <div className="list-item dark-item">
              Некоторые ученики позже сами стали преподавателями польского языка
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <p className="section-label">FAQ</p>
            <h2>Частые вопросы</h2>
          </div>

          <div className="faq-list">
            {faqs.map((item) => (
              <div key={item.q} className="card">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lead-form" className="section contact-section">
        <div className="container two-col contact-grid">
          <div>
            <h2 className="light-text">Запись в мини-группу</h2>
            <p className="section-text light-text soft">
              Основной способ записи — через форму на сайте. Если Telegram удобнее,
              можно написать туда как в запасной канал.
            </p>

            <div className="card" style={{ marginTop: '24px' }}>
              <div className="card-title">Как устроена запись</div>
              <div className="list">
                <div className="list-item">1. Выбираете уровень</div>
                <div className="list-item">2. Оставляете заявку через сайт</div>
                <div className="list-item">3. Я связываюсь с вами и подтверждаю запись</div>
              </div>
            </div>
          </div>

          <div className="card contact-card">
            <div className="card-title">Форма записи</div>

            <div className="contact-intro">
              <div>Выберите свой уровень</div>
              <div>A1 — это группа для тех, кто начинает с нуля</div>
            </div>

            <div className="level-grid">
              {levelButtons.map((level) => (
                <button
                  key={level.label}
                  type="button"
                  className="level-button"
                  onClick={() => setSelectedLevel(level.label)}
                >
                  <div className="level-title">{level.label}</div>
                  <div className="level-note">{level.note}</div>
                </button>
              ))}
            </div>

            <form className="mt" onSubmit={handleSubmit}>
              <div className="faq-list">
                <div>
                  <div className="section-label" style={{ marginBottom: '8px' }}>Имя</div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '18px',
                      border: '1px solid #e7e5e4',
                      fontSize: '16px',
                    }}
                  />
                </div>

                <div>
                  <div className="section-label" style={{ marginBottom: '8px' }}>Контакт</div>
                  <input
                    type="text"
                    placeholder="Telegram, телефон или email"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '18px',
                      border: '1px solid #e7e5e4',
                      fontSize: '16px',
                    }}
                  />
                </div>

                <div>
                  <div className="section-label" style={{ marginBottom: '8px' }}>Выбранный уровень</div>
                  <input
                    type="text"
                    value={selectedLevel}
                    readOnly
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '18px',
                      border: '1px solid #e7e5e4',
                      background: '#f5f5f4',
                      fontSize: '16px',
                    }}
                  />
                </div>

                <div>
                  <div className="section-label" style={{ marginBottom: '8px' }}>Комментарий</div>
                  <textarea
                    placeholder="Например: учила польский раньше / удобно такое-то время"
                    rows="4"
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: '18px',
                      border: '1px solid #e7e5e4',
                      fontSize: '16px',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Оставить заявку через сайт
                </button>
              </div>
            </form>

            <div className="info-box">
              Если Telegram удобнее, можно написать туда сразу. Уровень подставится в сообщение автоматически.
            </div>

            <a
              href={getTelegramLink(selectedLevel)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ width: '100%', marginTop: '16px' }}
            >
              Написать в Telegram по уровню {selectedLevel}
            </a>

            <div className="contact-links">
              <div>Telegram: @{telegramUsername}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}