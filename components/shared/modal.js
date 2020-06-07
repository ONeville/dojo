const Modal = () =>{

      return (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            // onClick={showModal}
          >
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <div className="font-medium mr-10">
                    <span className="text-gray-600">Ajouter/Modifier:</span>{" "}
                    <span className="text-xl">{item.course}</span>
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={showModal}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative px-6 flex-auto">
                    <div className="flex flex-col border rounded-sm my-2 pb-2">
                      <h5 className="py-2 px-4 font-semibold bg-gray-200 border-b">
                        1ere Semestre
                      </h5>
                      <div className="flex justify-between w-auto px-4 py-1 border-b">
                        <span>1ere Periode</span>
                        <span>
                          <Input
                            label="period1"
                            register={register}
                            errors={errors}
                            data={item.semester1.periode1}
                          />
                        </span>
                      </div>
                      <div className="flex justify-between w-auto px-4 py-1 border-b">
                        <span>2eme Periode</span>
                        <span>
                          <Input
                            label="period2"
                            register={register}
                            errors={errors}
                            data={item.semester1.periode2}
                          />
                        </span>
                      </div>
                      <div className="flex justify-between w-auto px-4 py-1">
                        <span>Examen</span>
                        <span>
                          <Input
                            label="exam1"
                            register={register}
                            errors={errors}
                            data={item.semester1.exam}
                          />
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col border rounded-sm my-2 pb-2">
                      <h5 className="py-2 px-4 font-semibold bg-gray-200 border-b">
                        2eme Semestre
                      </h5>
                      <div className="flex justify-between w-auto py-1 px-4 border-b">
                        <span>3eme Periode</span>
                        <span>
                          <Input
                            label="period3"
                            register={register}
                            errors={errors}
                            data={item.semester2.periode1}
                          />
                        </span>
                      </div>
                      <div className="flex justify-between w-auto py-1 px-4 border-b">
                        <span>4eme Periode</span>
                        <span>
                          <Input
                            label="period4"
                            register={register}
                            errors={errors}
                            data={item.semester2.periode2}
                          />
                        </span>
                      </div>
                      <div className="flex justify-between w-auto py-1 px-4">
                        <span>Examen</span>
                        <span>
                          <Input
                            label="exam2"
                            register={register}
                            errors={errors}
                            data={item.semester2.exam}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="reset"
                      style={{ transition: "all .15s ease" }}
                      onClick={showModal}
                    >
                      Annuler
                    </button>
                    <button
                      className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      style={{ transition: "all .15s ease" }}
                    >
                      Enregistrer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      );
}