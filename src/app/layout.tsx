// app/layout.tsx
import "./globals.css";  // CSS padrão do shadcn/ui
import "./devio-design.css";  // Nosso sistema de design personalizado
import { TooltipProvider } from "@radix-ui/react-tooltip";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
        
    </html>
  );
}