import uiTypes from 'store/types/ui';

export const activateLoading = () => ({
  type: uiTypes.ACTIVATE_LOADING,
});

export const deactivateLoading = () => ({
  type: uiTypes.DEACTIVATE_LOADING,
});
