export enum ErrorCodes {
  // Application Error codes
  NoError,
  UnKnownError,
  ServerError,
  PriceStreamingDisconnected,
  PriceMetaDisconnected,
  TradeDisconnected,
  MandatoryFieldEmpty,
  AppConfigNotReceived,

  // Login Related Error Codes
  InvalidCredentials,
  UserNameOrPasswordEmpty,
  AccountLocked,

  // Change Password Related Error Codes
  PasswordEqualToUsername,
  OldPassowrdMismatch,
  NewPasswordNotMatchWithConfirmPassword,
  NewPasswordEqualToOldPassword,
  PasswordPolicyLoadingFailure,
  RegularExpressionValidationFailure,
  MissingLowerCaseChars,
  MissingUpperCaseChars,
  MissingNumbericChars,
  MissingSpecialChars,
  LessThanMinPasswordLength,
  RecentlyUsedPassword,
  PasswordNotStartingWithChar,
  LoginAndTradePasswordsAreEqual,
}
