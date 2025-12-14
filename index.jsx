const { createRoot } = ReactDOM
const { useState } = React

function Main() {
  const [step, setStep] = useState(1)
  const [rows, setRows] = useState()
  const [cols, setCols] = useState()
  const [array, setArray] = useState()

  return (
    <>
      {step >= 1 &&
        <Step1
          setStep={setStep}
          setSupplies={setRows}
          setDemands={setCols}
        ></Step1>
      }
      {step >= 2 &&
        <Step2
          setStep={setStep}
          supplies={rows}
          demands={cols}
          setMatrix={setArray}
        ></Step2>
      }
      {step >= 3 &&
        <Result
          matrix={array}
        ></Result>
      }
    </>
  )
}


createRoot(document.querySelector('container')).render(<Main />)
