
export class UserState {

	private static instance: UserState;

	private exchangeConfigMap: any = {};
	private tradeDetails = {};
	private priceDetails = {};
	private isEmailVerified = false;
	private isMobileVerified = false;

	public static getInstance(): UserState {
		UserState.instance = UserState.instance || new UserState();
		return UserState.instance;
	}

	constructor() {
		if (UserState.instance) {
			throw new Error('Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.');
		}
	}

	public clearInstance(): void {
		this.priceDetails = {};
		this.tradeDetails = {};

		this.exchangeConfigMap = {};
		this.isEmailVerified = false;
		this.isMobileVerified = false;
	}

	public clearPriceData(): void {
		this.priceDetails = {};
	}

	public getTradeDetails(): any {
		return this.tradeDetails;
	}

	public getPriceDetails(): any {
		return this.priceDetails;
	}

	public getExchangeConfigMap(): any {
		return this.exchangeConfigMap;
	}
}
