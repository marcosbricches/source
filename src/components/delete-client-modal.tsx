// components/modals/delete-client-modal.tsx
"use client"

import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle 
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangleIcon } from "lucide-react"

interface DeleteClientModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  clientName: string
}

export function DeleteClientModal({ isOpen, onClose, onConfirm, clientName }: DeleteClientModalProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-2 text-red-600 mb-2">
            <AlertTriangleIcon className="h-5 w-5" />
            <AlertDialogTitle>Excluir Cliente</AlertDialogTitle>
          </div>
          <AlertDialogDescription className="text-base text-gray-700">
            Você está prestes a excluir permanentemente o cliente <span className="font-medium">{clientName}</span>. Esta ação não pode ser desfeita.
          </AlertDialogDescription>
          <div className="bg-red-50 border border-red-100 rounded-md p-3 mt-2">
            <p className="text-sm text-red-800">
              A exclusão removerá todos os dados associados a este cliente, incluindo histórico de uso e configurações personalizadas.
            </p>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel asChild>
            <Button variant="outline">Cancelar</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white" 
              onClick={(e) => {
                e.preventDefault()
                onConfirm()
              }}
            >
              Excluir Permanentemente
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}