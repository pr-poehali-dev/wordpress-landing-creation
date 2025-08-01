import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Globe" className="text-primary" size={32} />
            <span className="text-2xl font-montserrat font-bold text-gray-900">WordPressDev</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="font-open-sans text-gray-600 hover:text-primary transition-colors">Главная</a>
            <Link to="/services" className="font-open-sans text-gray-600 hover:text-primary transition-colors">Услуги</Link>
            <a href="#portfolio" className="font-open-sans text-gray-600 hover:text-primary transition-colors">Портфолио</a>
            <a href="#contact" className="font-open-sans text-gray-600 hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-white font-montserrat">
            Заказать сайт
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-primary via-secondary to-accent text-white animate-fade-in rounded-none py-20">
        <div className="container mx-auto px-4 text-center animate-scale-in">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6 leading-tight">
            Создаем сайты на
            <span className="block bg-gradient-to-r from-gold to-yellow-300 bg-clip-text text-transparent">
              WordPress
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-open-sans mb-8 max-w-3xl mx-auto opacity-90">
            Профессиональная разработка современных и функциональных сайтов. 
            От лендингов до интернет-магазинов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-black font-montserrat font-semibold text-lg px-8 py-4">
              <Icon name="Rocket" className="mr-2" size={20} />
              Обсудить проект
            </Button>
            <Button size="lg" variant="outline" className="border-white text-gold hover:bg-white hover:text-primary font-montserrat font-semibold text-lg px-8 py-4">
              Посмотреть работы
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
              Полный спектр услуг по созданию и поддержке сайтов на WordPress
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Layout" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl font-montserrat font-bold text-gray-900">Лендинги</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 font-open-sans text-center text-lg">
                  Продающие одностраничные сайты с высокой конверсией для вашего бизнеса
                </CardDescription>
                <div className="mt-4 text-center">
                  <Link to="/services">
                    <Button variant="outline" className="hover:bg-primary hover:text-white transition-colors">
                      Подробнее
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white animate-scale-in" style={{animationDelay: '0.1s'}}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Store" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl font-montserrat font-bold text-gray-900">Интернет-магазины</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 font-open-sans text-center text-lg">
                  Полнофункциональные магазины на WooCommerce с удобной системой управления
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white animate-scale-in" style={{animationDelay: '0.2s'}}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Building" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl font-montserrat font-bold text-gray-900">Корпоративные сайты</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 font-open-sans text-center text-lg">
                  Представительские сайты компаний с современным дизайном и функционалом
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white animate-scale-in" style={{animationDelay: '0.3s'}}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Zap" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl font-montserrat font-bold text-gray-900">Оптимизация</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 font-open-sans text-center text-lg">
                  Ускорение загрузки, SEO-оптимизация и настройка безопасности сайта
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white animate-scale-in" style={{animationDelay: '0.4s'}}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Settings" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl font-montserrat font-bold text-gray-900">Поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 font-open-sans text-center text-lg">
                  Техническая поддержка, обновления и резервное копирование сайтов
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white animate-scale-in" style={{animationDelay: '0.5s'}}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Smartphone" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl font-montserrat font-bold text-gray-900">Адаптивность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 font-open-sans text-center text-lg">
                  Идеальное отображение на всех устройствах: компьютерах, планшетах, телефонах
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-4">
              Портфолио
            </h2>
            <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
              Примеры наших работ - от элегантных лендингов до сложных интернет-магазинов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/img/6063f3ea-7053-4514-b68b-d5be9af81d01.jpg" 
                  alt="Интернет-магазин электроники"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-montserrat font-bold text-gray-900">Магазин электроники</CardTitle>
                <CardDescription className="font-open-sans text-gray-600">
                  Интернет-магазин с каталогом товаров, корзиной и системой оплаты
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Посмотреть проект
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/img/5fa2d2f1-294c-4cba-bdaa-9666f5a00040.jpg" 
                  alt="Корпоративный сайт IT-компании"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-montserrat font-bold text-gray-900">Корпоративный сайт</CardTitle>
                <CardDescription className="font-open-sans text-gray-600">
                  Представительский сайт IT-компании с портфолио и формой заявок
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-white transition-colors">
                  Посмотреть проект
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/img/3e1c7f41-b7e2-43c6-9c67-ddabb16cb892.jpg" 
                  alt="Сайт медицинского центра"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-montserrat font-bold text-gray-900">Медицинский центр</CardTitle>
                <CardDescription className="font-open-sans text-gray-600">
                  Сайт клиники с записью на прием и каталогом услуг
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-white transition-colors">
                  Посмотреть проект
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
              Тарифы и цены
            </h2>
            <p className="text-xl opacity-90 font-open-sans max-w-3xl mx-auto">
              Прозрачные цены без скрытых платежей. Выберите тариф, который подходит именно вашему бизнесу.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Globe" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl font-montserrat font-bold">Базовый</CardTitle>
                <CardDescription className="text-white/80 font-open-sans">
                  Идеально для небольших проектов
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-montserrat font-bold">₽15,000</span>
                  <span className="text-white/60 font-open-sans ml-2">за проект</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-accent flex-shrink-0" size={20} />
                    <span className="font-open-sans">До 5 страниц</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-accent flex-shrink-0" size={20} />
                    <span className="font-open-sans">Адаптивный дизайн</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-accent flex-shrink-0" size={20} />
                    <span className="font-open-sans">Базовый SEO</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-accent flex-shrink-0" size={20} />
                    <span className="font-open-sans">Форма обратной связи</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-accent flex-shrink-0" size={20} />
                    <span className="font-open-sans">1 месяц поддержки</span>
                  </div>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/80 text-white font-montserrat font-semibold mt-6">
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-gradient-to-br from-primary to-secondary text-white border-2 border-gold relative overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="absolute top-0 right-0 bg-gold text-gray-900 px-4 py-2 text-sm font-montserrat font-bold">
                Популярный
              </div>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Star" className="text-gold" size={32} />
                </div>
                <CardTitle className="text-2xl font-montserrat font-bold">Профессиональный</CardTitle>
                <CardDescription className="text-white/90 font-open-sans">
                  Лучший выбор для бизнеса
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-montserrat font-bold">₽35,000</span>
                  <span className="text-white/80 font-open-sans ml-2">за проект</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-gold flex-shrink-0" size={20} />
                    <span className="font-open-sans">До 15 страниц</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-gold flex-shrink-0" size={20} />
                    <span className="font-open-sans">Уникальный дизайн</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-gold flex-shrink-0" size={20} />
                    <span className="font-open-sans">Полноценный SEO</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-gold flex-shrink-0" size={20} />
                    <span className="font-open-sans">Интеграция с CRM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-gold flex-shrink-0" size={20} />
                    <span className="font-open-sans">Аналитика и метрики</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-gold flex-shrink-0" size={20} />
                    <span className="font-open-sans">3 месяца поддержки</span>
                  </div>
                </div>
                <Button className="w-full bg-gold hover:bg-gold/80 text-gray-900 font-montserrat font-semibold mt-6">
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Crown" className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl font-montserrat font-bold">Корпоративный</CardTitle>
                <CardDescription className="text-white/80 font-open-sans">
                  Для крупных проектов
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-montserrat font-bold">₽75,000</span>
                  <span className="text-white/60 font-open-sans ml-2">за проект</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-gold flex-shrink-0" size={20} />
                    <span className="font-open-sans">Неограниченно страниц</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-gold flex-shrink-0" size={20} />
                    <span className="font-open-sans">Эксклюзивный дизайн</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-gold flex-shrink-0" size={20} />
                    <span className="font-open-sans">Продвинутый SEO</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-gold flex-shrink-0" size={20} />
                    <span className="font-open-sans">Интернет-магазин</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-gold flex-shrink-0" size={20} />
                    <span className="font-open-sans">Многоязычность</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Check" className="text-gold flex-shrink-0" size={20} />
                    <span className="font-open-sans">6 месяцев поддержки</span>
                  </div>
                </div>
                <Button className="w-full bg-gold hover:bg-gold/80 text-gray-900 font-montserrat font-semibold mt-6">
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-white/80 font-open-sans mb-4">
              Нужен индивидуальный проект? Обсудим ваши требования лично.
            </p>
            <Button variant="outline" className="border-white/30 text-gold hover:bg-white/10 hover:text-gold font-montserrat font-semibold">
              <Icon name="Phone" className="mr-2" size={20} />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 text-gray-900">
              О нас
            </h2>
            <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto">
              Мы — команда экспертов с 8-летним опытом разработки на WordPress. 
              Создаем сайты, которые работают на результат вашего бизнеса.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-montserrat font-bold mb-6 text-gray-900">
                Почему выбирают нас?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Zap" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-montserrat font-semibold mb-2 text-gray-900">
                      Быстрая разработка
                    </h4>
                    <p className="text-gray-600 font-open-sans">
                      Средний срок создания сайта — 7-14 дней. Используем готовые решения и проверенные технологии.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Icon name="Shield" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-montserrat font-semibold mb-2 text-gray-900">
                      Гарантия качества
                    </h4>
                    <p className="text-gray-600 font-open-sans">
                      Предоставляем 6 месяцев технической поддержки. Все сайты проходят тестирование на безопасность.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Icon name="Users" className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-montserrat font-semibold mb-2 text-gray-900">
                      Персональный подход
                    </h4>
                    <p className="text-gray-600 font-open-sans">
                      За каждым проектом закреплен менеджер. Регулярно отчитываемся о ходе работ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center group cursor-pointer">
                  <div className="text-4xl font-montserrat font-bold text-primary mb-2 group-hover:scale-110 transition-transform animate-pulse">150+</div>
                  <p className="text-gray-600 font-open-sans">Проектов завершено</p>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-4xl font-montserrat font-bold text-secondary mb-2 group-hover:scale-110 transition-transform animate-pulse">8</div>
                  <p className="text-gray-600 font-open-sans">Лет опыта</p>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-4xl font-montserrat font-bold text-accent mb-2 group-hover:scale-110 transition-transform animate-pulse">98%</div>
                  <p className="text-gray-600 font-open-sans">Довольных клиентов</p>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-4xl font-montserrat font-bold text-gold mb-2 group-hover:scale-110 transition-transform animate-pulse">24/7</div>
                  <p className="text-gray-600 font-open-sans">Поддержка</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-montserrat font-bold mb-8 text-gray-900">
              Наша команда
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon name="User" className="text-white" size={48} />
                </div>
                <h4 className="text-xl font-montserrat font-semibold mb-2 text-gray-900">Алексей Иванов</h4>
                <p className="text-gray-600 font-open-sans mb-2">Lead Developer</p>
                <p className="text-sm text-gray-500 font-open-sans">5+ лет с WordPress, 50+ проектов</p>
              </div>
              
              <div className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon name="User" className="text-white" size={48} />
                </div>
                <h4 className="text-xl font-montserrat font-semibold mb-2 text-gray-900">Мария Петрова</h4>
                <p className="text-gray-600 font-open-sans mb-2">UI/UX Designer</p>
                <p className="text-sm text-gray-500 font-open-sans">Создает красивые и удобные интерфейсы</p>
              </div>
              
              <div className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-accent to-gold rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon name="User" className="text-white" size={48} />
                </div>
                <h4 className="text-xl font-montserrat font-semibold mb-2 text-gray-900">Дмитрий Сидоров</h4>
                <p className="text-gray-600 font-open-sans mb-2">Project Manager</p>
                <p className="text-sm text-gray-500 font-open-sans">Контролирует сроки и качество</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 text-gray-900">
              Как мы работаем
            </h2>
            <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto">
              Простой и понятный процесс от идеи до запуска. 
              Вы всегда знаете, на каком этапе находится ваш проект.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="MessageCircle" className="text-white" size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3 text-gray-900">
                Консультация
              </h3>
              <p className="text-gray-600 font-open-sans">
                Обсуждаем ваши цели, анализируем требования и составляем техническое задание.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Palette" className="text-white" size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3 text-gray-900">
                Дизайн
              </h3>
              <p className="text-gray-600 font-open-sans">
                Создаем макеты страниц, подбираем цвета и шрифты. Согласовываем каждую деталь.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-gold rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Code" className="text-white" size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3 text-gray-900">
                Разработка
              </h3>
              <p className="text-gray-600 font-open-sans">
                Программируем сайт на WordPress, устанавливаем плагины и настраиваем функционал.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-gold to-primary rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Rocket" className="text-white" size={32} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3 text-gray-900">
                Запуск
              </h3>
              <p className="text-gray-600 font-open-sans">
                Тестируем сайт, настраиваем хостинг и передаем вам готовый проект с инструкцией.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-montserrat font-semibold px-8 py-3">
              <Icon name="Calendar" className="mr-2" size={20} />
              Начать проект
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl opacity-90 font-open-sans max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в течение часа
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat font-bold text-center text-white">
                  Форма обратной связи
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-open-sans font-medium mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Введите имя" 
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-open-sans font-medium mb-2">Телефон</label>
                    <Input 
                      placeholder="+7 (999) 123-45-67" 
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-open-sans font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-open-sans font-medium mb-2">Описание проекта</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..." 
                    rows={4}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                  />
                </div>
                <Button className="w-full bg-gold hover:bg-gold/90 text-black font-montserrat font-semibold text-lg py-6">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Globe" className="text-primary" size={32} />
                <span className="text-2xl font-montserrat font-bold">WordPressDev</span>
              </div>
              <p className="text-gray-400 font-open-sans">
                Профессиональная разработка сайтов на WordPress. 
                Создаем современные и функциональные веб-решения.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-montserrat font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 font-open-sans text-gray-400">
                <li>Лендинги</li>
                <li>Интернет-магазины</li>
                <li>Корпоративные сайты</li>
                <li>Оптимизация и поддержка</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-montserrat font-bold mb-4">Контакты</h3>
              <div className="space-y-2 font-open-sans text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@wordpressdev.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Россия</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 font-open-sans">
            <p>&copy; 2024 WordPressDev. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;