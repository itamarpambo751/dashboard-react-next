import { ReactNode } from "react"

export default function Main({
    children
}: { 
    children: ReactNode
}) {
    return(
        <main className="w-full h-[94vh] relative">
            <aside className="shadow w-[300px] h-full rounded-3xl absolute">
                <header className="p-5">
                    <h1 className="font-bold">Admin</h1>
                </header>
            </aside>
            <div className="ml-auto w-[calc(100%-300px)] h-full">
                {children}
            </div>
        </main>
    )
}