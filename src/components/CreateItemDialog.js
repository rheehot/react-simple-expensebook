import React from 'react';
import { Dialog } from './Dialog';
import { ItemForm } from './ItemForm';

export const CreateItemDialog = () => {
  return (
    <Dialog title="지출 등록" confirmText="등록">
      <ItemForm />
    </Dialog>
  );
};

CreateItemDialog.defaultProps = {};

CreateItemDialog.displayName = 'CreateItemDialog';
