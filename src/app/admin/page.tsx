import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AdminPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle>Painel do Administrador</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Esta é a área de administração. Funcionalidades como gerenciamento de produtos, pedidos e entregas serão implementadas aqui.</p>
        </CardContent>
      </Card>
    </div>
  );
}
