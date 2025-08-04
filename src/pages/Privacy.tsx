import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const Privacy = () => {
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
          <div className="flex items-center mb-8">
            <Link 
              to="/" 
              className="flex items-center text-gray-600 hover:text-primary transition-colors mr-4"
            >
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              На главную
            </Link>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
                Политика конфиденциальности
              </h1>
              <p className="text-xl text-gray-600 font-open-sans">
                Информация о сборе, обработке и защите персональных данных
              </p>
              <div className="flex items-center justify-center text-gray-500 mt-4">
                <Icon name="Calendar" size={16} className="mr-2" />
                <span className="font-open-sans">Последнее обновление: 4 августа 2025 г.</span>
              </div>
            </div>

            <div className="space-y-8">
              {/* Общие положения */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center font-montserrat text-2xl">
                    <Icon name="Shield" className="mr-3 text-primary" size={28} />
                    1. Общие положения
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 font-open-sans leading-relaxed">
                  <p>
                    Настоящая Политика конфиденциальности определяет порядок обработки персональных данных 
                    и меры по обеспечению безопасности персональных данных в ООО «WebCraft» (далее — Оператор) 
                    в целях соблюдения требований Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных».
                  </p>
                  <p>
                    Оператор ставит своей важнейшей целью и условием осуществления своей деятельности 
                    соблюдение прав и свобод человека и гражданина при обработке его персональных данных, 
                    в том числе защиты права на неприкосновенность частной жизни, личную и семейную тайну.
                  </p>
                </CardContent>
              </Card>

              {/* Основные понятия */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center font-montserrat text-2xl">
                    <Icon name="BookOpen" className="mr-3 text-primary" size={28} />
                    2. Основные понятия
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 font-open-sans leading-relaxed">
                  <div className="space-y-3">
                    <div>
                      <strong>Персональные данные</strong> — любая информация, относящаяся к прямо или косвенно 
                      определенному или определяемому физическому лицу (субъекту персональных данных).
                    </div>
                    <div>
                      <strong>Обработка персональных данных</strong> — любое действие (операция) или совокупность 
                      действий (операций), совершаемых с использованием средств автоматизации или без использования 
                      таких средств с персональными данными.
                    </div>
                    <div>
                      <strong>Автоматизированная обработка</strong> — обработка персональных данных с помощью 
                      средств вычислительной техники.
                    </div>
                    <div>
                      <strong>Блокирование персональных данных</strong> — временное прекращение обработки 
                      персональных данных (за исключением случаев, если обработка необходима для уточнения 
                      персональных данных).
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Принципы обработки */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center font-montserrat text-2xl">
                    <Icon name="Target" className="mr-3 text-primary" size={28} />
                    3. Принципы и цели обработки персональных данных
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 font-open-sans leading-relaxed">
                  <div>
                    <h4 className="font-semibold mb-2">Принципы обработки персональных данных:</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Обработка осуществляется на законной и справедливой основе
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Обработка ограничивается достижением конкретных, заранее определенных и законных целей
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Не допускается обработка персональных данных, несовместимая с целями их сбора
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Обрабатываемые персональные данные соответствуют целям их обработки
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Цели обработки персональных данных:</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Предоставление услуг по разработке веб-сайтов
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Обработка заявок и обратная связь с клиентами
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Выполнение договорных обязательств
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        Информирование о новых услугах и предложениях
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Категории персональных данных */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center font-montserrat text-2xl">
                    <Icon name="Database" className="mr-3 text-primary" size={28} />
                    4. Категории персональных данных
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 font-open-sans leading-relaxed">
                  <p>Оператор обрабатывает следующие категории персональных данных:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Контактные данные:</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Фамилия, имя, отчество</li>
                        <li>• Номер телефона</li>
                        <li>• Адрес электронной почты</li>
                        <li>• Наименование организации</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Дополнительные данные:</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Информация о проекте</li>
                        <li>• Бюджет проекта</li>
                        <li>• Предпочтения по услугам</li>
                        <li>• История обращений</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Права субъекта */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center font-montserrat text-2xl">
                    <Icon name="Users" className="mr-3 text-primary" size={28} />
                    5. Права субъекта персональных данных
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 font-open-sans leading-relaxed">
                  <p>Субъект персональных данных имеет право:</p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Icon name="Check" className="mr-3 mt-1 text-green-500 flex-shrink-0" size={16} />
                      <span>Получать информацию об обработке своих персональных данных</span>
                    </div>
                    <div className="flex items-start">
                      <Icon name="Check" className="mr-3 mt-1 text-green-500 flex-shrink-0" size={16} />
                      <span>Требовать уточнения, блокирования или уничтожения персональных данных</span>
                    </div>
                    <div className="flex items-start">
                      <Icon name="Check" className="mr-3 mt-1 text-green-500 flex-shrink-0" size={16} />
                      <span>Отзывать согласие на обработку персональных данных</span>
                    </div>
                    <div className="flex items-start">
                      <Icon name="Check" className="mr-3 mt-1 text-green-500 flex-shrink-0" size={16} />
                      <span>Обжаловать действия или бездействие Оператора в уполномоченный орган по защите прав субъектов персональных данных или в судебном порядке</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Меры защиты */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center font-montserrat text-2xl">
                    <Icon name="Lock" className="mr-3 text-primary" size={28} />
                    6. Меры по обеспечению безопасности
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 font-open-sans leading-relaxed">
                  <p>Оператор принимает необходимые и достаточные организационные и технические меры для защиты персональных данных:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-3 flex items-center">
                        <Icon name="Server" className="mr-2 text-primary" size={20} />
                        Технические меры
                      </h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          Шифрование данных при передаче (SSL/TLS)
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          Защищенное хранение в базах данных
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          Регулярное резервное копирование
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          Мониторинг безопасности систем
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-3 flex items-center">
                        <Icon name="UserCheck" className="mr-2 text-primary" size={20} />
                        Организационные меры
                      </h5>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          Назначение ответственных лиц
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          Обучение сотрудников
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          Контроль доступа к данным
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          Аудит безопасности
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Использование cookies */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center font-montserrat text-2xl">
                    <Icon name="Cookie" className="mr-3 text-primary" size={28} />
                    7. Использование файлов Cookie
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 font-open-sans leading-relaxed">
                  <p>
                    Наш сайт использует файлы cookie для улучшения пользовательского опыта и аналитики. 
                    Cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении сайта.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Типы используемых cookie:</h5>
                    <ul className="space-y-2">
                      <li><strong>Необходимые:</strong> обеспечивают работу основных функций сайта</li>
                      <li><strong>Аналитические:</strong> помогают понимать, как посетители используют сайт</li>
                      <li><strong>Функциональные:</strong> запоминают ваши предпочтения и настройки</li>
                    </ul>
                  </div>
                  <p>
                    Вы можете управлять файлами cookie через настройки браузера или отключить их полностью. 
                    Однако это может повлиять на функциональность сайта.
                  </p>
                </CardContent>
              </Card>

              {/* Контактная информация */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center font-montserrat text-2xl">
                    <Icon name="Mail" className="mr-3 text-primary" size={28} />
                    8. Контактная информация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 font-open-sans leading-relaxed">
                  <p>
                    По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться к нам:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                    <div className="flex items-center">
                      <Icon name="Building" className="mr-3 text-primary" size={20} />
                      <span><strong>ООО «WebCraft»</strong></span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Mail" className="mr-3 text-primary" size={20} />
                      <span>Email: privacy@webcraft.ru</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Phone" className="mr-3 text-primary" size={20} />
                      <span>Телефон: +7 (495) 123-45-67</span>
                    </div>
                    <div className="flex items-start">
                      <Icon name="MapPin" className="mr-3 mt-1 text-primary" size={20} />
                      <span>Адрес: г. Москва, ул. Примерная, д. 1, офис 100</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Изменения в политике */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center font-montserrat text-2xl">
                    <Icon name="RefreshCw" className="mr-3 text-primary" size={28} />
                    9. Изменения в политике конфиденциальности
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700 font-open-sans leading-relaxed">
                  <p>
                    Оператор имеет право вносить изменения в настоящую Политику конфиденциальности. 
                    При внесении изменений в актуальной редакции указывается дата последнего обновления.
                  </p>
                  <p>
                    Новая редакция Политики вступает в силу с момента ее размещения на сайте, 
                    если иное не предусмотрено новой редакцией Политики.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <p className="font-medium text-yellow-800">
                      Рекомендуем регулярно просматривать данную страницу для ознакомления с актуальной информацией 
                      о наших методах обработки персональных данных.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Согласие */}
            <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
              <div className="text-center">
                <Icon name="CheckCircle" className="mx-auto mb-4 text-green-500" size={48} />
                <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
                  Согласие на обработку персональных данных
                </h3>
                <p className="text-gray-700 font-open-sans mb-6 max-w-2xl mx-auto">
                  Используя наш сайт и отправляя нам свои персональные данные, вы даете согласие на их обработку 
                  в соответствии с настоящей Политикой конфиденциальности.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-montserrat font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <Icon name="Download" className="mr-2" size={20} />
                    Скачать в PDF
                  </Button>
                  <Link to="/">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-montserrat font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
                      <Icon name="Home" className="mr-2" size={20} />
                      На главную
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;