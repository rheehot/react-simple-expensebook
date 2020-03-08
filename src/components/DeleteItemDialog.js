import React from 'react';
import { Dialog } from './Dialog';

export const DeleteItemDialog = () => {
  return (
    <Dialog
      title="정말 삭제하시겠습니까?"
      confirmType="danger"
      confirmText="삭제"
    />
  );
};

DeleteItemDialog.defaultProps = {};

DeleteItemDialog.displayName = 'DeleteItemDialog';
