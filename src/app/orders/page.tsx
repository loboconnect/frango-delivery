import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ListOrdered } from 'lucide-react';

export default function OrdersPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <ListOrdered className="h-8 w-8" />
          <CardTitle>Meus Pedidos</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Aqui você poderá ver o histórico dos seus pedidos e acompanhar o status da entrega em tempo real.</p>
        </CardContent>
      </Card>
    </div>
  );
}
