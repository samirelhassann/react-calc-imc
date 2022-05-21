import { useState } from "react";
import styles from "./App.module.css";
import poweredImage from "./assets/powered.png";
import { levels, calculateImc } from "./helpers/imc";
import GridItem from "./components/GridItem/GridItem";

const App = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);

  const handleCalculateButton = () => {
    if (height && weight) {
    } else {
      alert("Digite todos os campos");
    }
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule io seu IMC.</h1>
          <p>Test project to calculate the IMC</p>
          <input
            type="number"
            placeholder="Digite sua altura"
            value={height > 0 ? height : ""}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
          />
          <input
            type="number"
            placeholder="Digite seu peso"
            value={weight > 0 ? weight : ""}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
