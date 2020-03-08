import React from 'react';
import { Dialog } from './Dialog';
import { ItemForm } from './ItemForm';

// TODO: 수정하려는 아이템의 정보를 받아서 ItemForm에 전달한다.
export const ModifyItemDialog = () => {
  return (
    <Dialog title="지출 수정" confirmText="수정">
      <ItemForm />
    </Dialog>
  );
};

ModifyItemDialog.defaultProps = {};

ModifyItemDialog.displayName = 'ModifyItemDialog';
