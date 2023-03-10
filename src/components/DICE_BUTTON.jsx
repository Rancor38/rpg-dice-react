import { d2, d4, d6, d8, d10, d20, d100, d12 } from "../images/index";
import { useDoubleTap } from "use-double-tap";

const DICE_BUTTON = ({ sides, dieToRoll, setDieToRoll, quantity, setQuantity }) => {
    const diceImages = {
        2: d2,
        4: d4,
        6: d6,
        8: d8,
        10: d10,
        12: d12,
        20: d20,
        100: d100,
    };

    

    const addOrSelect = useDoubleTap(() => {
        const currentQuant = Number(quantity)
        const onePlusQuant = currentQuant+1
        const addOne = () => {
            if (quantity < 100) {
                setQuantity(onePlusQuant)
        }
        }
        addOne()
    }, 300, {
        onSingleTap() {
            setDieToRoll(sides)
        }
      });

    if (dieToRoll === sides) {
        return (
            <div {...addOrSelect}
                className="die"
            >
                <img
                    className="currentDie die-centered"
                    id={`d${sides}`}
                    src={diceImages[sides]}
                    alt={sides}
                />
                <p className="die-centered die-number">{sides}</p>
                {/* <button className='currentDie' onClick={() => setDieToRoll(sides)}>d{sides}</button> */}
            </div>
        );
    }
    return (
        <div className="die" onClick={() => setDieToRoll(sides)}>
            <img
                className="die-centered"
                id={`d${sides}`}
                src={diceImages[sides]}
                alt={sides}
                onClick={() => setDieToRoll(sides)}
            />
            <p className="die-centered die-number">{sides}</p>
            {/* <button className='currentDie' onClick={() => setDieToRoll(sides)}>d{sides}</button> */}
        </div>
    );
};

export default DICE_BUTTON;
