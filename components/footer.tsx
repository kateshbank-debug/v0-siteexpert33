import Link from "next/link"
import { Mail, Phone, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl mb-4">Иван Швейкин</h3>
            <p className="text-sm text-primary-foreground/80">
              Эксперт по организационным изменениям и трансформации бизнеса
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+79146920123" className="hover:underline">
                  +7 914-692-01-23
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:ishveykin@mail.ru" className="hover:underline">
                  ishveykin@mail.ru
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Send size={16} />
                <a href="https://t.me/shivanu08" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  @shivanu08
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <div className="space-y-2 text-sm">
              <Link href="/" className="block hover:underline">
                Главная
              </Link>
              <Link href="/services" className="block hover:underline">
                Услуги
              </Link>
              <Link href="/about" className="block hover:underline">
                Об эксперте
              </Link>
              <Link href="/blog" className="block hover:underline">
                Блог
              </Link>
              <Link href="/contact" className="block hover:underline">
                Контакты
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Иван Швейкин. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
