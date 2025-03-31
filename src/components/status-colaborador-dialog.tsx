// app/components/status-colaborador-dialog.tsx
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog";
  import { Button } from "@/components/ui/button";
  import { AlertTriangleIcon, ShieldIcon } from "lucide-react";
  
  interface Colaborador {
    nome: string;
    status: string;
  }
  
  interface StatusColaboradorDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onConfirm: () => void;
    colaborador: Colaborador | null;
  }
  
  export function StatusColaboradorDialog({ 
      open, 
      onOpenChange, 
      onConfirm, 
      colaborador 
    }: StatusColaboradorDialogProps) {
    const isAtivando = colaborador?.status !== "Ativo";
    
    return (
      <AlertDialog open={open} onOpenChange={onOpenChange}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className={`flex items-center gap-2 ${isAtivando ? 'text-green-600' : 'text-amber-600'} mb-2`}>
              {isAtivando ? (
                <ShieldIcon className="h-5 w-5" />
              ) : (
                <AlertTriangleIcon className="h-5 w-5" />
              )}
              <AlertDialogTitle>
                {isAtivando ? 'Ativar Colaborador' : 'Inativar Colaborador'}
              </AlertDialogTitle>
            </div>
            <AlertDialogDescription className="text-base text-gray-700">
              {isAtivando 
                ? `Você está prestes a ativar o colaborador ${colaborador?.nome}, permitindo que ele acesse o sistema.`
                : `Você está prestes a inativar o colaborador ${colaborador?.nome}, impedindo que ele acesse o sistema.`
              }
            </AlertDialogDescription>
            <div className={`${isAtivando ? 'bg-green-50 border-green-100' : 'bg-amber-50 border-amber-100'} border rounded-md p-3 mt-2`}>
              <p className={`text-sm ${isAtivando ? 'text-green-800' : 'text-amber-800'}`}>
                {isAtivando 
                  ? 'Ao ativar este colaborador, ele receberá um e-mail com instruções para acessar o sistema.'
                  : 'Ao inativar este colaborador, ele não poderá mais acessar o sistema até que seja ativado novamente.'
                }
              </p>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-4">
            <AlertDialogCancel asChild>
              <Button variant="outline">Cancelar</Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button 
                className={isAtivando ? 'bg-green-600 hover:bg-green-700' : 'bg-amber-600 hover:bg-amber-700'} 
                onClick={onConfirm}
              >
                {isAtivando ? 'Confirmar Ativação' : 'Confirmar Inativação'}
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }