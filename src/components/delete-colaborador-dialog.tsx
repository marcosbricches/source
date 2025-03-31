// app/components/delete-colaborador-dialog.tsx
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
  import { AlertTriangleIcon } from "lucide-react";
  
  interface DeleteColaboradorDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onConfirm: () => void;
    colaborador?: { nome: string };
  }

  export function DeleteColaboradorDialog({ 
    open, 
    onOpenChange, 
    onConfirm, 
    colaborador 
  }: DeleteColaboradorDialogProps) {
    return (
      <AlertDialog open={open} onOpenChange={onOpenChange}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex items-center gap-2 text-red-600 mb-2">
              <AlertTriangleIcon className="h-5 w-5" />
              <AlertDialogTitle>Excluir Colaborador</AlertDialogTitle>
            </div>
            <AlertDialogDescription className="text-base text-gray-700">
              Você está prestes a excluir permanentemente o colaborador <span className="font-semibold">{colaborador?.nome}</span>.
            </AlertDialogDescription>
            <div className="bg-red-50 border border-red-100 rounded-md p-3 mt-2">
              <p className="text-sm text-red-800">
                Esta ação não pode ser desfeita. Todos os dados associados a este colaborador serão removidos do sistema.
              </p>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-4">
            <AlertDialogCancel asChild>
              <Button variant="outline">Cancelar</Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button 
                className="bg-red-600 hover:bg-red-700" 
                onClick={onConfirm}
              >
                Confirmar Exclusão
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }