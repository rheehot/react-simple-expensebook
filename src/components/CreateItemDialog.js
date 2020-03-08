import React from 'react';
import { Dialog } from './Dialog';
import { ItemForm } from './ItemForm';
import { useDialogDispatch } from '../contexts/DialogContext';

export const CreateItemDialog = ({ visible }) => {
  const dialogDispatch = useDialogDispatch();
  const handleDialogCancel = () => dialogDispatch({ type: 'CLOSE_DIALOG' });

  return (
    <Dialog
      title="지출 등록"
      confirmText="등록"
      visible={visible}
      onCancel={handleDialogCancel}
    >
      <ItemForm />
    </Dialog>
  );
};

CreateItemDialog.defaultProps = {
  visible: false,
};

CreateItemDialog.displayName = 'CreateItemDialog';
