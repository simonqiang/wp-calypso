const isSettingsDataExist = ( state ) => {
	return null == state.accountRecovery.settings.data;
};

const getSettingsData = ( state ) => {
	return state.accountRecovery.settings.data;
};

export const isAccountRecoveryPhoneValidated = ( state ) => {
	return isSettingsDataExist( state ) ? false : getSettingsData( state ).phoneValidated;
};

export const isAccountRecoveryEmailValidated = ( state ) => {
	return isSettingsDataExist( state ) ? false : getSettingsData( state ).emailValidated;
};

export const getAccountRecoveryEmail = ( state ) => {
	return isSettingsDataExist( state ) ? '' : getSettingsData( state ).email;
};

export const getAccountRecoveryPhoneCountryCode = ( state ) => {
	return isSettingsDataExist( state ) ? '' : getSettingsData( state ).phoneCountryCode;
};

export const getAccountRecoveryPhoneCountryNumericCode = ( state ) => {
	return isSettingsDataExist( state ) ? '' : getSettingsData( state ).phoneCountryNumericCode;
};

export const getAccountRecoveryPhoneNumber = ( state ) => {
	return isSettingsDataExist( state ) ? '' : getSettingsData( state ).phoneNumber;
};

export const getAccountRecoveryPhoneNumberFull = ( state ) => {
	return isSettingsDataExist( state ) ? '' : getSettingsData( state ).phoneNumberFull;
};

export const isUpdatingAccountRecoveryPhone = ( state ) => {
	return !! state.accountRecovery.settings.isUpdating.phone;
};

export const isUpdatingAccountRecoveryEmail = ( state ) => {
	return !! state.accountRecovery.settings.isUpdating.email;
};

export const isDeletingAccountRecoveryPhone = ( state ) => {
	return !! state.accountRecovery.settings.isDeleting.phone;
};

export const isDeletingAccountRecoveryEmail = ( state ) => {
	return !! state.accountRecovery.settings.isDeleting.email;
};
