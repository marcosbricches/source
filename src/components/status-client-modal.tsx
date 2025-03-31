// components/modals/status-client-modal.tsx
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

interface StatusClientModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  clientName: string
  currentStatus: "Ativo" | "Inativo"
}

export function StatusClientModal({ isOpen, onClose, onConfirm, clientName, currentStatus }: StatusClientModalProps) {
  const isActivating = currentStatus === "Inativo"
  
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-2 text-amber-600 mb-2">
            <AlertTriangleIcon className="h-5 w-5" />
            <AlertDialogTitle>{isActivating ? "Ativar" : "Inativar"} Cliente</AlertDialogTitle>
          </div>
          <AlertDialogDescription className="text-base text-gray-700">
            {isActivating 
              ? `Você está prestes a ativar o cliente ${clientName}. Isso permitirá o acesso à plataforma.` 
              : `Você está prestes a inativar o cliente ${clientName}. Isso impedirá o acesso à plataforma.`
            }
          </AlertDialogDescription>
          {!isActivating && (
            <div className="bg-amber-50 border border-amber-100 rounded-md p-3 mt-2">
              <p className="text-sm text-amber-800">
                Ao inativar este cliente, a assinatura será automaticamente suspensa. Os dados serão preservados e poderão ser restaurados no futuro.
              </p>
            </div>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel asChild>
            <Button variant="outline">Cancelar</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button 
              className="bg-amber-600 hover:bg-amber-700" 
              onClick={(e) => {
                e.preventDefault()
                onConfirm()
              }}
            >
              Confirmar {isActivating ? "Ativação" : "Inativação"}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}