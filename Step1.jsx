const { useState, useEffect } = React

function Step1({ setStep, setSupplies, setDemands }) {
  const [rows, setRows] = useState()
  const [cols, setCols] = useState()

  useEffect(() => {
    if (rows && cols) {
      setStep(2)
      setSupplies(parseInt(rows))
      setDemands(parseInt(cols))
    }
    else {
      setStep(1)
    }
  }, [rows, cols])

  return (
    <>
      <h1>Крок 1</h1>
      <input
        style={{border: "var(--black-white) solid 2px", background: "var(--red)"}}
        placeholder="Кількість запасів"
        onChange={(event) => setRows(event.target.value)}
      />
      <input
        style={{border: "var(--black-white) solid 2px", background: "var(--green)"}}
        placeholder="Кількість потреб"
        onChange={(event) => setCols(event.target.value)}
      />
    </>
  )
}