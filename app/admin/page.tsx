import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

export const metadata = {
  title: "Панель управления - Иван Швейкин",
  description: "Административная панель для управления контентом сайта",
}

export default function AdminPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold mb-8">Панель управления</h1>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="text-primary" />
              Система управления контентом
            </CardTitle>
            <CardDescription>Для полноценной работы панели управления необходимо интегрировать CMS</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Для управления контентом сайта (блог, отзывы, фотографии) рекомендуется интегрировать одну из следующих
              систем:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">Netlify CMS</h3>
                <p className="text-sm text-muted-foreground">
                  Бесплатная система управления контентом с интеграцией GitHub. Позволяет редактировать контент через
                  веб-интерфейс.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">Sanity.io</h3>
                <p className="text-sm text-muted-foreground">
                  Современная headless CMS с бесплатным тарифом. Удобный интерфейс для управления контентом.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">Contentful</h3>
                <p className="text-sm text-muted-foreground">
                  Профессиональная CMS с бесплатным тарифом для небольших проектов.
                </p>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg mt-6">
              <h4 className="font-semibold mb-2">Возможности после интеграции:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Добавление и редактирование постов в блоге</li>
                <li>• Управление отзывами клиентов</li>
                <li>• Замена фотографий и изображений</li>
                <li>• Редактирование текстового контента</li>
                <li>• Управление метаданными для SEO</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
