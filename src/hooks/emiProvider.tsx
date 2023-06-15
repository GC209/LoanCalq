import { createContext, useState } from "react";

interface EmiBreakupType{
  outstandingPrincipal: number;
  principal: number;
  interest: number;
}

interface EmiDetailType {
  principal: number;
  interest: number,
  duration: number,
  emi: number,
  monthlyEmiBreakup:Array<EmiBreakupType>
}

type ContextType = {
  emiDetail: EmiDetailType | null;
  setEmiDetail: (newValue: EmiDetailType) => void;
}

export const EmiDetailContext = createContext<ContextType>({
  emiDetail: null,
  setEmiDetail: () => undefined
})

type ThemeContextProviderProps = {
  children: React.ReactNode;
}

const EmiDetailContextProvider = ({ children }: ThemeContextProviderProps):JSX.Element => {
  const [emiDetail, setEmiDetail] = useState<EmiDetailType|null>(null);
  return (
    <EmiDetailContext.Provider value={{emiDetail, setEmiDetail}}>{children}</EmiDetailContext.Provider>
  )
}

export default EmiDetailContextProvider;