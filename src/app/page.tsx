import { Button } from '@/components/ui/button';
import { Utensils } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-background to-[#1f0a0a] p-4 text-center">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="space-y-4">
          <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Frango Assado
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Aquele sabor tradicional de domingo, agora na porta da sua casa.
          </p>
        </div>
        <Link href="/menu">
          <Button size="lg" className="h-14 gap-2 px-10 text-lg font-semibold">
            <Utensils className="h-5 w-5" />
            Ver Cardápio
          </Button>
        </Link>
      </div>
    </main>
  );
}
