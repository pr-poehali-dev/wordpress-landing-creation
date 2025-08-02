import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import ContactModal from '@/components/ContactModal';

const About = () => {
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

  const team = [
    {
      name: 'Алексей Петров',
      role: 'CEO & Founder',
      description: 'Более 8 лет в веб-разработке. Создал более 200 успешных проектов.',
      skills: ['Стратегия', 'Менеджмент', 'UI/UX'],
      icon: 'User',
      gradient: 'from-primary to-secondary'
    },
    {
      name: 'Мария Сидорова',
      role: 'Lead Designer',
      description: 'Креативный дизайнер с опытом работы в крупных агентствах.',
      skills: ['UI Design', 'Branding', 'Figma'],
      icon: 'Palette',
      gradient: 'from-secondary to-gold'
    },
    {
      name: 'Дмитрий Козлов',
      role: 'Senior Developer',
      description: 'Эксперт в современных веб-технологиях и оптимизации.',
      skills: ['React', 'Node.js', 'DevOps'],
      icon: 'Code',
      gradient: 'from-gold to-primary'
    },
    {
      name: 'Елена Морозова',
      role: 'Project Manager',
      description: 'Обеспечивает качество и своевременную сдачу всех проектов.',
      skills: ['Agile', 'Scrum', 'Quality Control'],
      icon: 'CheckCircle',
      gradient: 'from-primary to-gold'
    }
  ];

  const stats = [
    { number: '200+', label: 'Реализованных проектов', icon: 'Trophy' },
    { number: '5 лет', label: 'На рынке', icon: 'Calendar' },
    { number: '150+', label: 'Довольных клиентов', icon: 'Users' },
    { number: '99%', label: 'Положительных отзывов', icon: 'Star' }
  ];

  const values = [
    {
      title: 'Качество',
      description: 'Мы никогда не идем на компромиссы в вопросах качества. Каждый проект проходит тщательное тестирование.',
      icon: 'Award',
      gradient: 'from-primary to-secondary'
    },
    {
      title: 'Инновации',
      description: 'Используем самые современные технологии и подходы для создания передовых решений.',
      icon: 'Lightbulb',
      gradient: 'from-secondary to-gold'
    },
    {
      title: 'Партнерство',
      description: 'Мы не просто выполняем задачи, а становимся надежными партнерами для наших клиентов.',
      icon: 'Handshake',
      gradient: 'from-gold to-primary'
    },
    {
      title: 'Результат',
      description: 'Наша цель — не просто создать сайт, а помочь бизнесу достичь реальных результатов.',
      icon: 'Target',
      gradient: 'from-primary to-gold'
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
              <Link to="/services" className="text-gray-600 hover:text-primary transition-colors font-open-sans">
                Услуги
              </Link>
              <Link to="/about" className="text-primary font-medium font-open-sans">
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
            О <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">WebCraft</span>
          </h1>
          <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Мы — команда профессионалов, которая превращает идеи в успешные веб-проекты. 
            С 2019 года помогаем бизнесу расти в цифровой среде.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 animate-fade-in" style={{animationDelay: '0.3s'}}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="text-center border-0 bg-white hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-3xl font-montserrat font-bold text-gray-900 mb-2">
                    {stat.number}
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-open-sans">
                    {stat.label}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary animate-fade-in" style={{animationDelay: '0.4s'}}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-8">
              Наша История
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left space-y-6">
                <p className="text-lg font-open-sans leading-relaxed">
                  WebCraft начиналась как маленькая студия с большими амбициями. 
                  В 2019 году мы поставили цель — создавать не просто сайты, 
                  а цифровые решения, которые помогают бизнесу процветать.
                </p>
                <p className="text-lg font-open-sans leading-relaxed">
                  За эти годы мы выросли в команду профессионалов, но сохранили 
                  главное — индивидуальный подход к каждому клиенту и стремление 
                  к совершенству в каждом проекте.
                </p>
                <p className="text-lg font-open-sans leading-relaxed">
                  Сегодня мы гордимся тем, что помогли более чем 150 компаниям 
                  достичь своих целей в интернете.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon name="Calendar" className="text-gold" size={24} />
                    <span className="text-xl font-montserrat font-bold">2019</span>
                  </div>
                  <p className="font-open-sans">Основание WebCraft</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon name="Users" className="text-gold" size={24} />
                    <span className="text-xl font-montserrat font-bold">2021</span>
                  </div>
                  <p className="font-open-sans">Расширение команды до 10 человек</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon name="Trophy" className="text-gold" size={24} />
                    <span className="text-xl font-montserrat font-bold">2024</span>
                  </div>
                  <p className="font-open-sans">200+ успешных проектов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 animate-fade-in" style={{animationDelay: '0.5s'}}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
              Наша Команда
            </h2>
            <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
              Профессионалы своего дела, которые превращают ваши идеи в реальность
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="text-center border-0 bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-3 animate-scale-in"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <CardHeader className="pb-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={member.icon as any} className="text-white" size={40} />
                  </div>
                  <CardTitle className="text-xl font-montserrat font-bold text-gray-900 mb-2">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-open-sans font-semibold mb-3">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-open-sans mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-open-sans"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 animate-fade-in" style={{animationDelay: '0.6s'}}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
              Наши Ценности
            </h2>
            <p className="text-xl text-gray-600 font-open-sans max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="border-0 bg-white hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                    <Icon name={value.icon as any} className="text-white" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-montserrat font-bold text-gray-900">
                      {value.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 font-open-sans text-lg leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary animate-fade-in" style={{animationDelay: '0.7s'}}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Готовы работать с нами?
          </h2>
          <p className="text-xl text-white/90 font-open-sans mb-8 max-w-2xl mx-auto">
            Давайте создадим что-то удивительное вместе. Обсудим ваш проект уже сегодня!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => openContactModal("Связаться с нами", "Давайте обсудим ваш проект и создадим что-то удивительное вместе!")}
              className="bg-white text-primary hover:bg-gray-100 font-montserrat font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Связаться с нами
            </Button>
            <Link to="/services">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary font-montserrat font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
                <Icon name="Eye" className="mr-2" size={20} />
                Наши услуги
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

export default About;