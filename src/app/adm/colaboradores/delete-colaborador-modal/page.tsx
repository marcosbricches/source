// app/components/delete-colaborador-modal.tsx
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Icons
import { AlertTriangle, User, Trash, X, ShieldAlert } from 'lucide-react';

// Este é um componente que seria usado nas páginas de listagem ou visualização
// Em um app real, receberia props e estado para controlar sua exibição
export default function DeleteColaboradorModal() {
  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-md">
        {/* ModalHeader: delete-confirmation */}
        <DialogHeader className="space-y-3">
          <div className="mx-auto devio-icon-container devio-icon-danger">
            <Trash className="h-5 w-5" />
          </div>
          <DialogTitle className="text-center devio-text-xl devio-font-bold">Excluir Colaborador</DialogTitle>
          <DialogDescription className="text-center devio-text-muted">
            Esta ação não pode ser desfeita. O colaborador perderá acesso ao sistema imediatamente.
          </DialogDescription>
        </DialogHeader>

        {/* ModalContent: collaborator-info */}
        <div className="space-y-4 py-2">
          <Alert className="devio-alert devio-alert-danger">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <span className="devio-font-medium">Atenção: Ação Permanente!</span>
              <br />
              <span className="devio-text-sm">A exclusão de colaboradores não pode ser revertida e todos os dados de acesso serão removidos.</span>
            </AlertDescription>
          </Alert>
          
          {/* CollaboratorDetails: info */}
          <div className="border rounded-lg p-4 bg-neutral-50">
            <div className="devio-flex devio-items-center devio-gap-3 mb-3">
              <div className="devio-icon-container devio-icon-container-sm devio-icon-primary">
                <User className="h-3.5 w-3.5" />
              </div>
              <div>
                <p className="devio-font-medium">Ana Silva</p>
                <p className="devio-text-xs devio-text-muted">ana.silva@exemplo.com</p>
              </div>
            </div>
            <div className="devio-flex devio-gap-2">
              <Badge className="devio-badge devio-badge-primary">
                <ShieldAlert className="h-3 w-3 mr-1" />
                Master
              </Badge>
              <Badge className="devio-badge devio-badge-success">Ativo</Badge>
            </div>
          </div>
          
          {/* MasterOnlyWarning: restriction */}
          <div className="devio-highlight-box">
            <div className="devio-flex devio-gap-2 devio-items-center">
              <ShieldAlert className="h-4 w-4 text-primary-500" />
              <p className="devio-text-sm devio-font-medium">Somente usuários Master podem excluir colaboradores.</p>
            </div>
          </div>
        </div>

        {/* ModalFooter: action-buttons */}
        <DialogFooter className="sm:justify-between">
          <Button variant="outline" className="devio-btn devio-btn-outline">
            <X className="mr-2 h-4 w-4" />
            Cancelar
          </Button>
          <Button className="devio-btn bg-red-600 hover:bg-red-700 text-white">
            <Trash className="mr-2 h-4 w-4" />
            Confirmar Exclusão
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}