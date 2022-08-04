import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
     <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
             {/* Overlay */}
       <div className='top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
       <div className='p-5 text-white z-[2] mt-[-10rem]'>
         <h2 className='text-5xl font-bold'>Achieve Your Goals</h2>
         <p className='py-5 text-xl'>If you want to burn fat, build muscle, get stronger and live better you have come to the right place.</p>
         <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:border-yellow-300'  onClick={() => setShowModal(true)}>Lets Train</button>
       </div>
     </div>
 
      {showModal ? (
        <>
    
        {/* Modal */}
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-bold text-2xl leading-relaxed">
                  For any equiries, or to book your FREE first personal training session with no obligation, contact us here.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    Close
                  </button>
                  
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button" onClick={() => location.href='/contact'}>Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

