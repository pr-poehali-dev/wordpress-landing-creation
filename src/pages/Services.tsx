import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import ContactModal from '@/components/ContactModal';

const Services = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    title: "Обсудить проект",
    description: "Расскажите о вашем проекте и мы свяжемся с вами в течение часа",
    defaultService: ""
  });

  const openContactModal = (title?: string, description?: string, service?: string) => {
    setModalConfig({
      title: title || "Обсудить проект",
      description: description || "Расскажите о вашем проекте и мы свяжемся с вами в течение часа",
      defaultService: service || ""
    });
    setIsContactModalOpen(true);
  };

  const services = [
    {
      id: 'landing',
      title: 'Лендинги',
      icon: 'Rocket',
      gradient: 'from-primary to-secondary',
      description: 'Одностраничные сайты для продвижения товаров и услуг',
      features: [
        'Продающий дизайн с высокой конверсией',
        'Адаптивная верстка для всех устройств', 
        'Интеграция с аналитикой и метриками',
        'A/B тестирование элементов',
        'Формы обратной связи и заявок'
      ],
      price: 'от 25 000 ₽',
      duration: '5-7 дней'
    },
    {
      id: 'ecommerce',
      title: 'Интернет-магазины',
      icon: 'ShoppingCart',
      gradient: 'from-secondary to-gold',
      description: 'Полнофункциональные платформы для онлайн-торговли',
      features: [
        'Каталог товаров с фильтрацией и поиском',
        'Корзина и система оформления заказов',
        'Интеграция с платежными системами',
        'Панель управления заказами',
        'SEO-оптимизация для поисковых систем'
      ],
      price: 'от 80 000 ₽',
      duration: '14-21 день'
    },
    {
      id: 'corporate',
      title: 'Корпоративные сайты',
      icon: 'Building',
      gradient: 'from-gold to-primary',
      description: 'Презентационные сайты для компаний и организаций',
      features: [
        'Многостраничная структура с навигацией',
        'Раздел о компании и команде',
        'Портфолио и кейсы проектов',
        'Блог и система новостей',
        'Контактная информация и формы связи'
      ],
      price: 'от 45 000 ₽',
      duration: '10-14 дней'
    },
    {
      id: 'optimization',
      title: 'Оптимизация и SEO',
      icon: 'Zap',
      gradient: 'from-gold to-yellow-500',
      description: 'Улучшение производительности и поисковой оптимизации',
      features: [
        'Анализ и оптимизация скорости загрузки',
        'SEO-аудит и исправление ошибок',
        'Настройка метатегов и структурированных данных',
        'Оптимизация изображений и кода',
        'Настройка аналитики и отслеживания'
      ],
      price: 'от 15 000 ₽',
      duration: '3-5 дней'
    },
    {
      id: 'support',
      title: 'Техническая поддержка',
      icon: 'Settings',
      gradient: 'from-primary to-gold',
      description: 'Постоянная поддержка и обновление ваших проектов',
      features: [
        'Регулярные обновления контента',
        'Исправление ошибок и багов',
        'Резервное копирование данных',
        'Мониторинг работоспособности',
        'Консультации по развитию проекта'
      ],
      price: 'от 5 000 ₽/мес',
      duration: 'постоянно'
    },
    {
      id: 'responsive',
      title: 'Адаптивная верстка',
      icon: 'Smartphone',
      gradient: 'from-secondary to-primary',
      description: 'Идеальное отображение на всех типах устройств',
      features: [
        'Адаптация под мобильные устройства',
        'Оптимизация для планшетов',
        'Тестирование на разных экранах',
        'Touch-friendly интерфейсы',
        'Кроссбраузерная совместимость'
      ],
      price: 'от 20 000 ₽',
      duration: '7-10 дней'
    }
  ];

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
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-gray-900 mb-6 animate-scale-in">
            Наши <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Услуги</span>
          </h1>
          <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Полный спектр услуг для создания и развития вашего веб-присутствия. 
            От простых лендингов до сложных интернет-магазинов.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 animate-fade-in" style={{animationDelay: '0.3s'}}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white animate-scale-in overflow-hidden"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon name={service.icon as any} className="text-white" size={32} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-montserrat font-bold text-gray-900 mb-2">
                          {service.title}
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Icon name="Clock" size={14} className="mr-1" />
                            {service.duration}
                          </span>
                          <span className="flex items-center">
                            <Icon name="Tag" size={14} className="mr-1" />
                            {service.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 font-open-sans text-lg mb-6">
                    {service.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <h4 className="font-montserrat font-semibold text-gray-900 mb-3">Что входит:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 font-open-sans">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Button 
                      onClick={() => openContactModal(`Заказать ${service.title}`, `Обсудим ваш проект по созданию ${service.title.toLowerCase()}`, service.id)}
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-montserrat font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      Заказать услугу
                      <Icon name="ArrowRight" className="ml-2" size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary animate-fade-in" style={{animationDelay: '0.5s'}}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Готовы начать проект?
          </h2>
          <p className="text-xl text-white/90 font-open-sans mb-8 max-w-2xl mx-auto">
            Обсудим ваши задачи и подберем оптимальное решение для вашего бизнеса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => openContactModal("Получить консультацию", "Обсудим ваши задачи и подберем оптимальное решение")}
              className="bg-white text-primary hover:bg-gray-100 font-montserrat font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Получить консультацию
            </Button>
            <Link to="/">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary font-montserrat font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
                <Icon name="ArrowLeft" className="mr-2" size={20} />
                На главную
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

export default Services;