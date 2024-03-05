import Main from "./fragments/_ui/Main";

export default function Home() {
  return (
    <Main>
      <div className="p-5">
        <header className="w-full flex justify-between items-center">
          <h1 className="font-bold text-xl">
            Dashboard
          </h1>
          <div className="flex space-x-10 items-center">
            <form className="flex bg-white overflow-hidden rounded-xl w-52 shadow">
              <input type="text" placeholder="Search here..." className="p-3 w-10/12 outline-none" />
              <button className="flex justify-center items-center flex-1">S</button>
            </form>
            <div className="flex space-x-4">
              <button className="w-10 h-10 rounded-full bg-slate-800"></button>
              <button className="w-10 h-10 rounded-full bg-slate-800"></button>
              <button className="w-10 h-10 rounded-full bg-slate-800"></button>
            </div>
            <button className="bg-[var(--third)] text-white flex justify-center items-center overflow-hidden rounded-xl w-48 shadow p-3">
              Generate Report
            </button>
          </div>
        </header>
        <div className="flex space-x-6 mt-12">
          <div className="shadow rounded-3xl flex-1 flex space-x-4 h-36 gradient_1 p-6">
            <div className="w-12 h-12 rounded-full bg-slate-300/60 flex justify-center items-center text-white">
              Icon
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-white">2478</h1>
              <span className="text-white">Total Invoices</span>
            </div>
          </div>
          <div className="shadow rounded-3xl flex-1 flex space-x-4 h-36 gradient_3 p-6">
            <div className="w-12 h-12 rounded-full bg-slate-300/60 flex justify-center items-center text-white">
              Icon
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-white">983</h1>
              <span className="text-white">Paid Invoices</span>
            </div>
          </div>
          <div className="shadow rounded-3xl flex-1 flex space-x-4 h-36 gradient_1 p-6">
            <div className="w-12 h-12 rounded-full bg-slate-300/60 flex justify-center items-center text-white">
              Icon
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-white">1256</h1>
              <span className="text-white">Unpaid Invoices</span>
            </div>
          </div>
          <div className="shadow rounded-3xl flex-1 flex space-x-4 h-36 gradient_2 p-6">
            <div className="w-12 h-12 rounded-full bg-slate-300/60 flex justify-center items-center text-white">
              Icon
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-white">652</h1>
              <span className="text-white">Total Invoices Sent</span>
            </div>
          </div>
        </div>
        <section className="grid grid-cols-2 space-x-6 shadow rounded-3xl w-full h-[22rem] mt-8 p-6">
          <div className="gradient_1 h-full rounded-3xl p-8 flex justify-between">
            <div className="flex flex-col justify-end items-end">
              <div className="flex flex-col space-y-2">
                <h2 className="text-4xl font-medium text-white">$824,571.93</h2>
                <span className="text-white">
                  Wallet Balance
                </span>
                <span className="text-white">
                  +0.8% than last week
                </span>
              </div>
            </div>
            <div className="h-full w-1/5 p-3 bg-white rounded-3xl flex justify-center items-center">
              <h2 className="font-bold -rotate-90">Change</h2>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <h1 className="font-bold mb-2 text-lg">Card´s Overview</h1>
              <p className="text-gray-400 leading-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quod a elit. Quo quod a</p>
              <div className="mt-10">
                <ul className="flex flex-col space-y-4">
                  <li className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full gradient_1" />
                      <strong className="text-sm text-stone-700">Account</strong>
                    </div>
                    <p className="text-gray-400 text-md">20%</p>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full gradient_2" />
                      <strong className="text-sm text-stone-700">Services</strong>
                    </div>
                    <p className="text-gray-400 text-md">40%</p>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full gradient_1" />
                      <strong className="text-sm text-stone-700">Restaurant</strong>
                    </div>
                    <p className="text-gray-400 text-md">15%</p>
                  </li>
                  <li className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full bg-stone-300" />
                      <strong className="text-sm text-stone-700">Others</strong>
                    </div>
                    <p className="text-gray-400 text-md">15%</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-48 h-48 rounded-full gradient_3" />
            </div>
          </div>
        </section>
      </div>
    </Main>
  );
}
