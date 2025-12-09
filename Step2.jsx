const { useState, useEffect } = React

function Step2({ setStep, supplies, demands, setMatrix }) {
  const [array, setArray] = useState()
  
  useEffect(() => {
    setArray(
      Array.from({ length: supplies + 1 }, () =>
        Array.from({ length: demands + 1 }, () =>
          ''
        )
      )
    )
  }, [supplies, demands])

  useEffect(() => {
    if (array) {
      const flag = array.every((row, rowIndex) =>
        row.every((col, colIndex) =>
          rowIndex == 0 && colIndex == 0 ? true : col != ''
        )
      )
      if (flag) {
        setStep(3)
        setMatrix(array)
      }
      else {
        setStep(2)
      }
    }
  }, [array])

  function inputChange(rowIndex, colIndex, value) {
    setArray(
      array.map((row, rIndex) =>
        row.map((col, cIndex) =>
          rIndex == rowIndex && cIndex == colIndex ? parseInt(value) : col
        )
      )
    )
  }

  return (
    <>
      <h1>Крок 2</h1>
      <container-table>
        <table>
          <tbody>
            {array && array.map((row, rowIndex) =>
              <tr key={rowIndex}>
                {row.map((col, colIndex) =>
                  <td key={colIndex} style={{background: rowIndex == 0 && colIndex == 0 && "var(--black-white)"}}>
                    {rowIndex == 0 && colIndex == 0 ? <></> :
                      <input
                        style={{background: colIndex == 0 ? "var(--red)" : rowIndex == 0 ? "var(--green)" : "var(--blue)"}}
                        onChange={(event) => inputChange(rowIndex, colIndex, event.target.value)}
                      />
                    }
                  </td>
                )}
              </tr>
            )}
          </tbody>
        </table>
      </container-table>
    </>
  )
}