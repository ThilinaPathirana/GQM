/**
	* Keep all message types here for AT protocol
	* (divide message types according to their groups.)
	* Created by MalakaD on 8/22/2017.
	**/

export enum BoMessageTypes {
  // Trading
  GetOrderList = 1 ,
  GetExecutionsByOrder = 3 ,

  // Group Authentication
  Login = 1 ,
  Logout = 2 ,

  // Group Entitlement
  GetEntitlementList = 1 ,
  GetCurrentUserEntitlementList = 10 ,

  // Group MasterData
  GetBankList = 4 ,
  EditBank = 2 ,
  AddBank = 1 ,

  // group market data
  AddExchange = 1 ,
  EditExchange = 2 ,
  ChangeStatusOfExchange = 3 ,
  GetExchangeList = 4 ,
  GetSubmarketList = 10 ,

  // Group Commission
  GetCommissionGroupList = 1 ,
  AddCommissionGroup = 2 ,
  ChangeCommissionGroupStatus = 3 , // mark as delete
  EditCommissionGroup = 4 ,

  GetCommissionStructureFilterList = 5 ,
  AddCommissionStructure = 6 ,
  EditCommissionStructure = 7 ,
  ChangeCommissionStructureStatus = 8 , // mark as delete

  GetCommissionPendingChangesList = 9 ,
  ChangeCommissionPendingChangesStatus = 10 , // l1 approve,l2 approve, delete, pending

  // `Group Finance
  AddCashTransaction = 1 ,
  GetCashTransaction = 2 ,
  GetClientCashTransactionList = 4 ,
  ChangeStatusOfClientCashTransaction = 5 ,

}
