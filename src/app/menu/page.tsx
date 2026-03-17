import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function MenuPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
       <Card>
        <CardHeader className="flex flex-row items-center gap-4">
            <BookOpen className="h-8 w-8" />
            <CardTitle>Nosso Cardápio</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Esta página exibirá o cardápio com todos os nossos deliciosos frangos e acompanhamentos.</p>
        </CardContent>
      </Card>
    </div>
  );
}
