/**
 * Keep all notification categories and subcategories here for AT protocol
 * Created by SitharaW on 26/10/2018
 **/

export const notificationCategory = [

	// add category and subcategory details in order
	{ category: [{ id: 1, name: 'customer deposit/withdrawal' }],
		subCategory: [
			{ id: 1, name: 'mark for customer deposit approve(current status pending)', symbol: 'C/De', link: 'client-cash-deposit-list', status: 1 },
			{ id: 2, name: 'mark for customer withdrawal approve(current status pending)', symbol: 'C/Wi', link: 'client-cash-withdraw-list', status: 0 },
		]},
	{ category: [{ id: 2, name: 'commission group' }],
		subCategory: [
			{ id: 1, name: 'mark to l1 approve message(current status pending)', symbol: 'com-grp/L1', link: 'pending-commission-changes-list-view-list', status: 1 },
			{ id: 2, name: 'mark to l2 approve message(current status l1approved)', symbol: 'com-grp/L2', link: 'pending-commission-changes-list-view-list', status: 6 },
			{ id: 3, name: 'mark for delete message(current status markAsDelete)', symbol: 'com-grp/del', link: 'pending-commission-changes-list-view-list', status: 4 },
		]},
	{ category: [{ id: 3, name: 'commission structure' }],
		subCategory: [
			{ id: 1, name: 'mark for l1 approve message(current status pending)', symbol: 'com-str/L1', link: 'pending-commission-changes-list-view-list', status: 1 },
			{ id: 2, name: 'mark for l2 approve message(current status l1approved)', symbol: 'com-str/L2', link: 'pending-commission-changes-list-view-list', status: 6 },
			{ id: 3, name: 'mark for delete message(current status markAsDelete)', symbol: 'com-str/del', link: 'pending-commission-changes-list-view-list', status: 4 },
		] },
];
