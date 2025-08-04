import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';
import ContactModal from '@/components/ContactModal';

interface ServicePlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  duration: string;
}

interface ServiceData {
  id: string;
  title: string;
  icon: string;
  gradient: string;
  description: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  plans: ServicePlan[];
  processSteps: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

const servicesData: Record<string, ServiceData> = {
  landing: {
    id: 'landing',
    title: 'Лендинги',
    icon: 'Rocket',
    gradient: 'from-primary to-secondary',
    description: 'Одностраничные сайты для продвижения товаров и услуг',
    fullDescription: 'Создаем высококонверсионные лендинги, которые превращают посетителей в клиентов. Наши одностраничные сайты спроектированы для максимальной эффективности продаж и включают все необходимые элементы для успешного маркетинга.',
    features: [
      'Продающий дизайн с высокой конверсией',
      'Адаптивная верстка для всех устройств', 
      'Интеграция с аналитикой и метриками',
      'A/B тестирование элементов',
      'Формы обратной связи и заявок'
    ],
    benefits: [
      'Увеличение конверсии до 15%',
      'Быстрая загрузка страницы',
      'SEO-оптимизация',
      'Интеграция с CRM-системами',
      'Мобильная адаптация'
    ],
    plans: [
      {
        name: 'Базовый',
        price: '25 000 ₽',
        duration: '5-7 дней',
        description: 'Простой лендинг для старта',
        features: [
          'Один экран с формой',
          'Базовый дизайн',
          'Мобильная адаптация',
          'Форма обратной связи',
          'Базовая SEO-оптимизация'
        ]
      },
      {
        name: 'Стандартный',
        price: '45 000 ₽',
        duration: '7-10 дней',
        description: 'Полноценный лендинг с аналитикой',
        features: [
          'Многосекционный дизайн',
          'Интерактивные элементы',
          'Интеграция с аналитикой',
          'A/B тестирование',
          'CRM интеграция',
          'Расширенная SEO-оптимизация'
        ],
        recommended: true
      },
      {
        name: 'Премиум',
        price: '75 000 ₽',
        duration: '10-14 дней',
        description: 'Максимальная конверсия и функциональность',
        features: [
          'Индивидуальный дизайн',
          'Анимации и микроинтерракции',
          'Продвинутая аналитика',
          'Множественные формы',
          'Интеграция с соцсетями',
          'Чат-бот поддержки',
          'Техническая поддержка 3 мес'
        ]
      }
    ],
    processSteps: [
      'Анализ целевой аудитории и конкурентов',
      'Создание структуры и wireframes',
      'Дизайн макетов и прототипирование',
      'Верстка и программирование',
      'Настройка аналитики и форм',
      'Тестирование и оптимизация'
    ],
    faq: [
      {
        question: 'Сколько времени займет создание лендинга?',
        answer: 'В зависимости от тарифа: от 5 до 14 дней. Базовый лендинг создается за 5-7 дней, премиум может занять до 2 недель.'
      },
      {
        question: 'Входит ли хостинг в стоимость?',
        answer: 'Первый год хостинга включен в стоимость всех тарифов. Далее оплата хостинга составляет 3000₽ в год.'
      },
      {
        question: 'Можно ли изменить дизайн после завершения?',
        answer: 'Да, мы предоставляем 2 бесплатные правки в течение месяца после сдачи проекта. Дополнительные изменения оплачиваются отдельно.'
      }
    ]
  },
  ecommerce: {
    id: 'ecommerce',
    title: 'Интернет-магазины',
    icon: 'ShoppingCart',
    gradient: 'from-secondary to-gold',
    description: 'Полнофункциональные платформы для онлайн-торговли',
    fullDescription: 'Разрабатываем современные интернет-магазины с полным функционалом для ведения онлайн-торговли. Наши решения включают удобную панель администратора, интеграцию с платежными системами и все необходимое для успешных продаж.',
    features: [
      'Каталог товаров с фильтрацией и поиском',
      'Корзина и система оформления заказов',
      'Интеграция с платежными системами',
      'Панель управления заказами',
      'SEO-оптимизация для поисковых систем'
    ],
    benefits: [
      'Автоматизация процесса продаж',
      'Управление складом и заказами',
      'Многоуровневая система скидок',
      'Интеграция с 1С',
      'Мобильное приложение'
    ],
    plans: [
      {
        name: 'Стартовый',
        price: '80 000 ₽',
        duration: '14-21 день',
        description: 'Базовый функционал для небольшого магазина',
        features: [
          'До 100 товаров',
          'Основные способы оплаты',
          'Базовая админка',
          'Мобильная версия',
          'Техподдержка 1 месяц'
        ]
      },
      {
        name: 'Бизнес',
        price: '150 000 ₽',
        duration: '21-30 дней',
        description: 'Расширенный функционал для среднего бизнеса',
        features: [
          'Неограниченное количество товаров',
          'Продвинутые фильтры и поиск',
          'Система скидок и акций',
          'Интеграция с доставкой',
          'Аналитика и отчеты',
          'Техподдержка 3 месяца'
        ],
        recommended: true
      },
      {
        name: 'Корпоративный',
        price: '250 000 ₽',
        duration: '30-45 дней',
        description: 'Максимальный функционал для крупного бизнеса',
        features: [
          'Мультиязычность',
          'B2B функционал',
          'Интеграция с 1С',
          'Мобильное приложение',
          'Персональные менеджеры',
          'CRM интеграция',
          'Техподдержка 6 месяцев'
        ]
      }
    ],
    processSteps: [
      'Анализ бизнес-процессов и требований',
      'Проектирование архитектуры системы',
      'Создание дизайна и UX',
      'Разработка backend и frontend',
      'Интеграция с внешними сервисами',
      'Тестирование и запуск'
    ],
    faq: [
      {
        question: 'Какие платежные системы можно подключить?',
        answer: 'Мы интегрируем все популярные системы: ЮMoney, Сбербанк, Тинькофф, PayPal, и другие. Выбор зависит от ваших потребностей.'
      },
      {
        question: 'Можно ли добавлять товары самостоятельно?',
        answer: 'Да, у вас будет удобная админ-панель для управления товарами, заказами и контентом. Проведем обучение работе с системой.'
      }
    ]
  },
  corporate: {
    id: 'corporate',
    title: 'Корпоративные сайты',
    icon: 'Building',
    gradient: 'from-gold to-primary',
    description: 'Презентационные сайты для компаний и организаций',
    fullDescription: 'Создаем представительские сайты, которые формируют доверие к вашему бренду и эффективно презентуют услуги компании. Наши корпоративные сайты сочетают профессиональный дизайн с удобной системой управления контентом.',
    features: [
      'Многостраничная структура с навигацией',
      'Раздел о компании и команде',
      'Портфолио и кейсы проектов',
      'Блог и система новостей',
      'Контактная информация и формы связи'
    ],
    benefits: [
      'Повышение доверия клиентов',
      'Профессиональный имидж',
      'Удобная система управления',
      'SEO-продвижение',
      'Интеграция с соцсетями'
    ],
    plans: [
      {
        name: 'Базовый',
        price: '45 000 ₽',
        duration: '10-14 дней',
        description: 'Стандартный корпоративный сайт',
        features: [
          'До 10 страниц',
          'Адаптивный дизайн',
          'Контактные формы',
          'Базовая SEO-оптимизация',
          'Система управления контентом'
        ]
      },
      {
        name: 'Расширенный',
        price: '75 000 ₽',
        duration: '14-21 день',
        description: 'Корпоративный сайт с дополнительным функционалом',
        features: [
          'До 20 страниц',
          'Блог и новости',
          'Портфолио с фильтрами',
          'Многоязычность',
          'Расширенная SEO-оптимизация',
          'Интеграция с соцсетями'
        ],
        recommended: true
      },
      {
        name: 'Премиум',
        price: '120 000 ₽',
        duration: '21-30 дней',
        description: 'Максимальный функционал для крупных компаний',
        features: [
          'Безлимитное количество страниц',
          'Корпоративный портал',
          'Интранет для сотрудников',
          'CRM интеграция',
          'Продвинутая аналитика',
          'Техподдержка 6 месяцев'
        ]
      }
    ],
    processSteps: [
      'Исследование компании и целевой аудитории',
      'Создание структуры и информационной архитектуры',
      'Дизайн в корпоративном стиле',
      'Разработка и верстка',
      'Наполнение контентом',
      'Тестирование и запуск'
    ],
    faq: [
      {
        question: 'Поможете с созданием контента?',
        answer: 'Да, мы помогаем с написанием текстов, подготовкой изображений и созданием видеоконтента. Это входит в расширенный и премиум тарифы.'
      },
      {
        question: 'Можно ли добавить интернет-магазин позже?',
        answer: 'Конечно! Мы можем интегрировать функционал интернет-магазина в существующий корпоративный сайт со скидкой 20%.'
      }
    ]
  },
  optimization: {
    id: 'optimization',
    title: 'Оптимизация и SEO',
    icon: 'Zap',
    gradient: 'from-gold to-yellow-500',
    description: 'Улучшение производительности и поисковой оптимизации',
    fullDescription: 'Комплексная оптимизация вашего сайта для улучшения позиций в поисковых системах и повышения скорости загрузки. Наши SEO-специалисты проведут полный аудит и устранят все технические недочеты.',
    features: [
      'Анализ и оптимизация скорости загрузки',
      'SEO-аудит и исправление ошибок',
      'Настройка метатегов и структурированных данных',
      'Оптимизация изображений и кода',
      'Настройка аналитики и отслеживания'
    ],
    benefits: [
      'Рост позиций в поиске',
      'Увеличение скорости в 2-3 раза',
      'Повышение конверсии',
      'Улучшение пользовательского опыта',
      'Детальная аналитика'
    ],
    plans: [
      {
        name: 'Базовый аудит',
        price: '15 000 ₽',
        duration: '3-5 дней',
        description: 'Начальная оптимизация сайта',
        features: [
          'Технический SEO-аудит',
          'Анализ скорости загрузки',
          'Базовая оптимизация',
          'Отчет с рекомендациями',
          'Настройка аналитики'
        ]
      },
      {
        name: 'Полная оптимизация',
        price: '35 000 ₽',
        duration: '7-10 дней',
        description: 'Комплексная оптимизация и SEO',
        features: [
          'Глубокий технический аудит',
          'Оптимизация кода и изображений',
          'Настройка метатегов',
          'Структурированные данные',
          'Оптимизация под мобильные',
          'Месяц сопровождения'
        ],
        recommended: true
      },
      {
        name: 'SEO-продвижение',
        price: '25 000 ₽/мес',
        duration: 'от 3 месяцев',
        description: 'Постоянное SEO-продвижение',
        features: [
          'Ежемесячная оптимизация',
          'Работа с семантикой',
          'Линкбилдинг',
          'Контент-маркетинг',
          'Детальные отчеты',
          'Консультации специалиста'
        ]
      }
    ],
    processSteps: [
      'Комплексный аудит сайта',
      'Анализ конкурентов и семантики',
      'Техническая оптимизация',
      'Работа с контентом',
      'Внешняя оптимизация',
      'Мониторинг результатов'
    ],
    faq: [
      {
        question: 'Как быстро будут видны результаты?',
        answer: 'Техническая оптимизация дает результат через 2-4 недели. SEO-продвижение показывает результаты через 3-6 месяцев.'
      },
      {
        question: 'Гарантируете ли вы попадание в ТОП?',
        answer: 'Мы гарантируем рост позиций, но конкретные места зависят от конкуренции в вашей нише. Даем прогнозы на основе анализа.'
      }
    ]
  },
  support: {
    id: 'support',
    title: 'Техническая поддержка',
    icon: 'Settings',
    gradient: 'from-primary to-gold',
    description: 'Постоянная поддержка и обновление ваших проектов',
    fullDescription: 'Обеспечиваем стабильную работу вашего сайта с помощью профессиональной технической поддержки. Наша команда мониторит работоспособность, выполняет обновления и быстро решает любые технические вопросы.',
    features: [
      'Регулярные обновления контента',
      'Исправление ошибок и багов',
      'Резервное копирование данных',
      'Мониторинг работоспособности',
      'Консультации по развитию проекта'
    ],
    benefits: [
      'Стабильная работа сайта 24/7',
      'Быстрое реагирование на проблемы',
      'Регулярные резервные копии',
      'Обновления безопасности',
      'Консультации экспертов'
    ],
    plans: [
      {
        name: 'Базовая',
        price: '5 000 ₽/мес',
        duration: 'ежемесячно',
        description: 'Минимальная поддержка для небольших сайтов',
        features: [
          'Мониторинг работоспособности',
          'Резервное копирование',
          'Обновления безопасности',
          'Email поддержка',
          'Время ответа до 24 часов'
        ]
      },
      {
        name: 'Стандартная',
        price: '12 000 ₽/мес',
        duration: 'ежемесячно',
        description: 'Полная поддержка для бизнес-сайтов',
        features: [
          'Все из базового тарифа',
          'Обновление контента (до 5 часов)',
          'Исправление ошибок',
          'Телефонная поддержка',
          'Время ответа до 4 часов',
          'Ежемесячный отчет'
        ],
        recommended: true
      },
      {
        name: 'Премиум',
        price: '25 000 ₽/мес',
        duration: 'ежемесячно',
        description: 'VIP-поддержка для крупных проектов',
        features: [
          'Все из стандартного тарифа',
          'Персональный менеджер',
          'Неограниченная работа с контентом',
          'Приоритетная поддержка',
          'Время ответа до 1 часа',
          'Консультации по развитию'
        ]
      }
    ],
    processSteps: [
      'Подключение мониторинга',
      'Настройка резервного копирования',
      'Создание плана поддержки',
      'Назначение персонального менеджера',
      'Регулярное обслуживание',
      'Отчетность и планирование'
    ],
    faq: [
      {
        question: 'Что входит в обновление контента?',
        answer: 'Изменение текстов, замена изображений, добавление новых страниц, обновление информации о товарах и услугах.'
      },
      {
        question: 'Как быстро вы реагируете на критические ошибки?',
        answer: 'Критические ошибки исправляем в течение 1-4 часов в зависимости от тарифа. Для премиум-клиентов - в течение часа.'
      }
    ]
  },
  responsive: {
    id: 'responsive',
    title: 'Адаптивная верстка',
    icon: 'Smartphone',
    gradient: 'from-secondary to-primary',
    description: 'Идеальное отображение на всех типах устройств',
    fullDescription: 'Создаем адаптивные сайты, которые одинаково хорошо работают на всех устройствах - от смартфонов до широкоформатных мониторов. Наша верстка учитывает особенности различных экранов и обеспечивает удобство использования.',
    features: [
      'Адаптация под мобильные устройства',
      'Оптимизация для планшетов',
      'Тестирование на разных экранах',
      'Touch-friendly интерфейсы',
      'Кроссбраузерная совместимость'
    ],
    benefits: [
      'Увеличение мобильного трафика',
      'Лучшие позиции в Google',
      'Повышение конверсии',
      'Улучшение пользовательского опыта',
      'Снижение отказов'
    ],
    plans: [
      {
        name: 'Базовая адаптация',
        price: '20 000 ₽',
        duration: '7-10 дней',
        description: 'Адаптация существующего сайта',
        features: [
          'Адаптация под мобильные',
          'Базовая оптимизация',
          'Тестирование на популярных устройствах',
          'Исправление критических ошибок',
          'Кроссбраузерность'
        ]
      },
      {
        name: 'Полная адаптация',
        price: '35 000 ₽',
        duration: '10-14 дней',
        description: 'Комплексная адаптация с оптимизацией',
        features: [
          'Адаптация под все устройства',
          'Оптимизация скорости',
          'Touch-friendly интерфейсы',
          'Продвинутое тестирование',
          'SEO-оптимизация',
          'Месяц поддержки'
        ],
        recommended: true
      },
      {
        name: 'Mobile First',
        price: '50 000 ₽',
        duration: '14-21 день',
        description: 'Создание с нуля по принципу Mobile First',
        features: [
          'Дизайн Mobile First',
          'Прогрессивные веб-технологии',
          'Оффлайн функциональность',
          'Push-уведомления',
          'Максимальная производительность',
          '3 месяца поддержки'
        ]
      }
    ],
    processSteps: [
      'Анализ текущего сайта',
      'Планирование адаптации',
      'Создание мобильных макетов',
      'Адаптивная верстка',
      'Тестирование на устройствах',
      'Оптимизация и запуск'
    ],
    faq: [
      {
        question: 'Можно ли адаптировать старый сайт?',
        answer: 'Да, мы можем адаптировать практически любой сайт. Стоимость зависит от сложности текущей верстки.'
      },
      {
        question: 'Будет ли сайт быстро загружаться на мобильных?',
        answer: 'Обязательно! Мы оптимизируем все элементы специально для мобильных устройств и медленных соединений.'
      }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    title: "Обсудить проект",
    description: "Расскажите о вашем проекте и мы свяжемся с вами в течение часа",
    defaultService: ""
  });

  const service = serviceId ? servicesData[serviceId] : null;

  useEffect(() => {
    if (!service) {
      navigate('/services');
    }
  }, [service, navigate]);

  if (!service) {
    return null;
  }

  const openContactModal = (title?: string, description?: string, serviceType?: string, plan?: string) => {
    setModalConfig({
      title: title || `Заказать ${service.title}`,
      description: description || `Обсудим ваш проект по ${service.title.toLowerCase()}`,
      defaultService: `${serviceType || service.id}${plan ? ` - ${plan}` : ''}`
    });
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50 animate-fade-in">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Rocket" className="text-white" size={20} />
              </div>
              <span className="text-xl font-montserrat font-bold text-gray-900">WebCraft</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-600 hover:text-primary transition-colors font-open-sans">
                Главная
              </Link>
              <Link to="/services" className="text-primary font-medium font-open-sans">
                Услуги
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-primary transition-colors font-open-sans">
                О нас
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 animate-fade-in">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-6">
            <Link 
              to="/services" 
              className="flex items-center text-gray-600 hover:text-primary transition-colors mr-4"
            >
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад к услугам
            </Link>
          </div>
          
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center`}>
                  <Icon name={service.icon as any} className="text-white" size={40} />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-2">
                    {service.title}
                  </h1>
                  <p className="text-xl text-gray-600 font-open-sans">
                    {service.description}
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 font-open-sans mb-8 leading-relaxed">
                {service.fullDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center font-montserrat">
                      <Icon name="CheckCircle" className="mr-2 text-green-500" size={24} />
                      Что входит
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 font-open-sans">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center font-montserrat">
                      <Icon name="Star" className="mr-2 text-yellow-500" size={24} />
                      Преимущества
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-gradient-to-r from-gold to-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 font-open-sans">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
              Тарифы и цены
            </h2>
            <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
              Выберите подходящий тариф для вашего проекта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  plan.recommended ? 'ring-2 ring-primary' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Рекомендуем
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-montserrat font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-montserrat font-bold text-primary">
                      {plan.price}
                    </span>
                  </div>
                  <CardDescription className="text-gray-600 font-open-sans">
                    {plan.description}
                  </CardDescription>
                  <div className="flex items-center justify-center text-sm text-gray-500 mt-2">
                    <Icon name="Clock" size={14} className="mr-1" />
                    {plan.duration}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Icon name="Check" className="mr-3 mt-0.5 text-green-500 flex-shrink-0" size={16} />
                        <span className="text-gray-700 font-open-sans text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => openContactModal(`Заказать ${plan.name}`, `Обсудим ваш проект по тарифу "${plan.name}"`, service.id, plan.name)}
                    className={`w-full font-montserrat font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                      plan.recommended 
                        ? 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Выбрать тариф
                    <Icon name="ArrowRight" className="ml-2" size={18} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
              Как мы работаем
            </h2>
            <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
              Пошаговый процесс создания вашего проекта
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {service.processSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-6 shadow-md">
                    <p className="text-gray-800 font-open-sans text-lg">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
              Ответы на популярные вопросы о наших услугах
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {service.faq.map((item, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg font-montserrat font-semibold text-gray-900 flex items-start">
                    <Icon name="HelpCircle" className="mr-3 mt-1 text-primary flex-shrink-0" size={20} />
                    {item.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 font-open-sans ml-8">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Готовы начать проект?
          </h2>
          <p className="text-xl text-white/90 font-open-sans mb-8 max-w-2xl mx-auto">
            Обсудим детали и выберем оптимальное решение для ваших задач
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => openContactModal(`Обсудить ${service.title}`, `Получить персональную консультацию по ${service.title.toLowerCase()}`)}
              className="bg-white text-primary hover:bg-gray-100 font-montserrat font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Обсудить проект
            </Button>
            <Link to="/services">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary font-montserrat font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
                <Icon name="ArrowLeft" className="mr-2" size={20} />
                Все услуги
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title={modalConfig.title}
        description={modalConfig.description}
        defaultService={modalConfig.defaultService}
      />
    </div>
  );
};

export default ServiceDetail;