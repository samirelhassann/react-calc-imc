import { useState } from "react";
import styles from "./App.module.css";
import { levels, calculateImc, Level } from "./helpers/imc";
import GridItem from "./components/GridItem/GridItem";
import leftArrowImage from "./assets/leftarrow.png";

const App = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [calculatedBMI, setCalculatedBMI] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if (height && weight) {
      setCalculatedBMI(calculateImc(height, weight) || null);
    } else {
      alert("Type all the fields");
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calculate your BMI</h1>
          <p>
            The body mass index (BMI) is a measure that uses your height and
            weight to work out if your weight is healthy
          </p>
          <input
            type="number"
            placeholder="Type your height"
            value={height > 0 ? height : ""}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
            disabled={calculatedBMI ? true : false}
          />
          <input
            type="number"
            placeholder="Type your Weight"
            value={weight > 0 ? weight : ""}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
            disabled={calculatedBMI ? true : false}
          />

          <button
            onClick={handleCalculateButton}
            disabled={calculatedBMI ? true : false}
          >
            Calculate
          </button>
        </div>
        <div className={styles.rightSide}>
          {!calculatedBMI && (
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem item={item} />
              ))}
            </div>
          )}

          {calculatedBMI && (
            <div className={styles.rightBig}>
              <div
                className={styles.rightArrow}
                onClick={() => setCalculatedBMI(null)}
              >
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={calculatedBMI} />
            </div>
          )}
        </div>
      </div>
      <div className={styles.footerContainer}>
        <p>
          This is a project used for study purposes only •{" "}
          <a href="https://github.com/samirelhassann">Samir El Hassan</a>
        </p>
      </div>
    </div>
  );
};

export default App;
