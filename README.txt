https://localhost

http://localhost:3000



<>
                <div className="renta-individual-wrapper">
                  <label className="renta-individual-label">
                    {RentaIndividual._id}
                  </label>
                  <CheckBox
                    key={RentaIndividual._id}
                    name={RentaIndividual._id}
                    checked={checked[RentaIndividual._id]}
                    setChecked={(e) =>
                      handleClickCheckBox(e, RentaIndividual._id)
                    }
                    className="renta-individual-checkbox"
                  />
                </div>
              </>