import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  defaultService?: string;
}

const ContactModal = ({ 
  isOpen, 
  onClose, 
  title = "Обсудить проект", 
  description = "Расскажите о вашем проекте и мы свяжемся с вами в течение часа",
  defaultService = ""
}: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService,
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Закрыть модал через 2 секунды после успешной отправки
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: defaultService,
        budget: '',
        message: ''
      });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <Card className="bg-white border-0 shadow-2xl animate-scale-in">
          <CardHeader className="relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="absolute right-4 top-4 h-8 w-8 p-0 hover:bg-gray-100"
            >
              <Icon name="X" size={20} />
            </Button>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="MessageCircle" className="text-white" size={24} />
              </div>
              <div>
                <CardTitle className="text-2xl font-montserrat font-bold text-gray-900">{title}</CardTitle>
                <CardDescription className="text-gray-600 font-open-sans">{description}</CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            {isSuccess ? (
              <div className="text-center py-8 animate-fade-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Check" className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
                <p className="text-gray-600 font-open-sans">Мы свяжемся с вами в ближайшее время</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-open-sans">
                      Ваше имя *
                    </label>
                    <Input
                      required
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="font-open-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-open-sans">
                      Телефон *
                    </label>
                    <Input
                      required
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="font-open-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-open-sans">
                    Email *
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="font-open-sans"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-open-sans">
                      Тип услуги
                    </label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="font-open-sans">
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="landing">Лендинг</SelectItem>
                        <SelectItem value="multipage">Многостраничный сайт</SelectItem>
                        <SelectItem value="webapp">Веб-приложение</SelectItem>
                        <SelectItem value="ecommerce">Интернет-магазин</SelectItem>
                        <SelectItem value="optimization">Оптимизация</SelectItem>
                        <SelectItem value="support">Поддержка</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-open-sans">
                      Бюджет
                    </label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger className="font-open-sans">
                        <SelectValue placeholder="Выберите бюджет" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="20-50">20 000 - 50 000 ₽</SelectItem>
                        <SelectItem value="50-100">50 000 - 100 000 ₽</SelectItem>
                        <SelectItem value="100-200">100 000 - 200 000 ₽</SelectItem>
                        <SelectItem value="200+">200 000+ ₽</SelectItem>
                        <SelectItem value="discuss">Обсудим</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-open-sans">
                    Описание проекта
                  </label>
                  <Textarea
                    placeholder="Расскажите подробнее о вашем проекте, целях и требованиях..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="font-open-sans"
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-montserrat font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <Icon name="Loader2" className="mr-2 animate-spin" size={20} />
                        Отправляем...
                      </>
                    ) : (
                      <>
                        <Icon name="Send" className="mr-2" size={20} />
                        Отправить заявку
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="font-montserrat font-semibold"
                  >
                    Отмена
                  </Button>
                </div>

                <p className="text-xs text-gray-500 font-open-sans text-center">
                  Нажимая кнопку "Отправить заявку", вы соглашаетесь с{' '}
                  <Link to="/privacy" className="text-primary hover:underline">
                    политикой конфиденциальности
                  </Link>
                  {' '}и обработкой персональных данных
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactModal;