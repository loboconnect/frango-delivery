import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function CartPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <ShoppingCart className="h-8 w-8" />
          <CardTitle>Carrinho de Compras</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Aqui ficarão os itens que você adicionar ao carrinho. Em breve, você poderá finalizar seu pedido por aqui.</p>
        </CardContent>
      </Card>
    </div>
  );
}
