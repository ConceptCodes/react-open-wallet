import { currency } from '@enums/currency.enum'

export interface IAssest {
    color: string;
    amt: number;
    currency: currency;
}

export type AssetState = {
  fiatBalance: string;
}

export interface ISidebarIcon{
  page: string;
  icon: JSX.Element
}

export type SidebarIconState = {
  current: boolean;
}

export interface ILogin {
  isAuthenticated: boolean;
}

export type LoginState = {
  isAuthenticated: boolean;
  address: string;
}


export interface IPortfolio {
  balance: number;
  currency: currency;
}

export type PortfolioState = {

}