/**
 * Keep all message types here for AT protocol
 * (divide message types according to their groups.)
 * Created by MalakaD on 8/22/2017.
 **/

export enum BoMessageTypes {
  // Group Authentication
  Login = 1,
  Logout = 2,
  LoginST = 3,

  Register = 23,
  Add_Scope = 2,
  View_Scope = 1,
  DocumentMeta = 1,
  DocumentHistory = 5,
  generateID = 2,
  AddDoc = 4,
  AddComment = 3,
  AddProcessStep = 10,
  SupplierRegistration = 11,
  AddProcess = 12,
  Label = 13,
}
