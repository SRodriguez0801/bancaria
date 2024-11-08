import React, {  createContext, ReactNode, useState } from 'react'

interface Transaccion{
    id:string;
    detalle: string;
}

interface AppContextProps{
    saldo: number;
    transacciones: Transaccion[];
    agregarSaldo: (monto: number) => void;
    transferirSaldo: (monto: number) => boolean;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export default function AppProvider({ children }: { children: ReactNode }) {
 
    const [saldo, setSaldo] = useState<number>(10000);
    const [transacciones, setTransacciones] = useState<Transaccion[]>([]);

    const agregarSaldo = (monto: number) =>{
        setSaldo(saldo + monto);
        agregarTransaccion(`Deposito de $.${monto}`);
    };

    const transferirSaldo = (monto: number) =>{
        if(monto <= saldo){
            setSaldo(saldo - monto);
            agregarTransaccion(`Retiro de $.${monto}`);
            return true; 
            }else {
                return false;
            }
        };
        const agregarTransaccion = (detalle: string) =>{
            setTransacciones((prev) => [{ id: Date.now().toString(), detalle},...prev.slice(0,4),]);
        }

        return(
            <AppContext.Provider value={{ saldo, agregarSaldo, transferirSaldo, transacciones}}>
             {children}
            </AppContext.Provider>
                );
    }

  
