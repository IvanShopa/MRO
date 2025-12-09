const { useState, useEffect } = React

function Result({ matrix }) {
  const [array, setArray] = useState()
  const [sum, setSum] = useState()
  
  useEffect(() => {
    if (matrix) {
      let balancedMatrix, i = 1, j = 1, resultSum = 0

      let supplies = [...matrix].slice(1).map((row) => row[0])
      let demands = [...matrix[0]].slice(1)

      let sumSupplies = supplies.reduce((sum, value) => sum + value, 0)
      let sumDemands = demands.reduce((sum, value) => sum + value, 0)

      if (sumSupplies != sumDemands) {
        balancedMatrix = matrix.map(row => [...row])

        if (sumSupplies > sumDemands) {
          let col = Array.from({ length: matrix.length }, () => 0)
          col[0] = sumSupplies - sumDemands
          balancedMatrix[0].push(col[0])
          for (let i = 1; i < matrix.length; i++) {
            balancedMatrix[i].push(0)
          }
        }
        else {
          let row = Array.from({ length: matrix[0].length }, () => 0)
          row[0] = sumDemands - sumSupplies
          row.push(0)
          balancedMatrix.push(row)
        }
      }
      else {
        balancedMatrix = matrix
      }

      supplies = [...balancedMatrix].slice(1).map((row) => row[0])
      demands = [...balancedMatrix[0]].slice(1)

      const numberSupplies = balancedMatrix.length
      const numberDemands = balancedMatrix[0].length
      
      let resultMatrix = Array.from({ length: numberSupplies }, () =>
        Array.from({ length: numberDemands }, () =>
          0
        )
      )

      while (i < numberSupplies && j < numberDemands) {
        let min = Math.min(supplies[i - 1], demands[j - 1])
        resultMatrix[i][j] = min, resultSum += min * balancedMatrix[i][j]
        supplies[i - 1] -= min, demands[j - 1] -= min
        supplies[i - 1] == 0 ? i++ : j++
      }

      setArray(resultMatrix)
      setSum(resultSum)
    }
  }, [matrix])
  
  return (
    <>
      <h1>Результат</h1>
      <container-table>
        <table>
          <tbody>
            {array && array.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((col, colIndex) =>
                  <td key={colIndex} style={{background: rowIndex == 0 && colIndex == 0 ? "var(--black-white)" : colIndex == 0 ? "var(--red)" : rowIndex == 0 ? "var(--green)" : "var(--blue)", padding: "8px"}}>
                    {rowIndex == 0 && colIndex == 0 ? <></> :
                      <>{col}</>
                    }
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </container-table>
      <h1>{sum}</h1>
    </>
  )
}