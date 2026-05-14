import { useState } from "react";
import "./App.css";

const columns = [
  {
    name: "animal",
    image: "/assets/kittie.jpg",
    text: "Тут дуже легко - ти моя мила і гарненька киця, а твій голос - це ласкаве муркотіння😽",
  },
  {
    name: "place",
    image: "/assets/church.jpg",
    text: "Я думав написати твою дача чи дім (логічно, бо ми стіки часу там провели), але потім мені прийшла цікава думка - якась з церков, в яких ми були. Але не якась конкретна, а просто в тому стилі, що ми бачили. Бо ззовні, як і ті церкви, ти виглядаєш дуже гарно і грандіозно, що аж перехоплює дух, але найцікавіше всередині, бо наповнення там дуже різноманітне, цікаве, часом незвичне, але настільки прекрасне, що його можна споглядати вічно і постійно знаходити в ньому якісь нові деталі⛪",
  },
  {
    name: "plant",
    image: "/assets/lily-of-the-valley.jpg",
    text: "Конвалія - для мене це квітка про витонченість, ніжність і лагідність, тому ти в мене асоціюєшся саме з нею💐",
  },
  {
    name: "character",
    image: "/assets/triss.jpg",
    text: "Трісс Мерігольд - саме в плані характеру, вона як і ти вміє відстояти свою думку, постояти за себе, і в той же час вона ну дуже мила і добра з близькими їй людьми🔥",
  },
  {
    name: "season",
    image: "/assets/autumn.jpg",
    text: "Тут очевидно осінь, теплі чайочки, светри, прогулянки під осінніми деревами - це все про тебе🍂",
  },
  {
    name: "hobby",
    image: "/assets/sudoku.jpg",
    text: "Cудоку і читання, вони поєднують в собі як твій гострий розум, так і чутливий характер📖",
  },
  {
    name: "color",
    image: "/assets/ocher.jpg",
    text: "Ти у мене асоціюєшся з якимось теплим кольором, типу золотої охри, бо ти дуже комфортна і така м'яка людина, з якою ну дуже приємно бути поруч🟨",
  },
  {
    name: "love language",
    image: "/assets/bite.jpg",
    text: "Я навіть не знаю, що тут обрати з усього різномаїття, мені здається це або укуси)) або обійми (це якщо брати фізичні). Якщо саме як прояви уваги - то це неймовірні зроблені тобою подарунки і всякі отакі прікольні штучки своїми руками, вони прям заставляють мене таяти🎨",
  },
  {
    name: "food/drink",
    image: "/assets/cinnamon-rolls.jpg",
    text: "Булочки з кремом і з корицею однозначно, мені здається це вперше, що ми щось таке готували разом з тоббою (не беручи всякі пріколи з дачі), був тоді дуже приємний вечір🍫",
  },
  {
    name: "movie/tv show",
    image: "/assets/dead-poets-society.jpg",
    text: "'Dead poets society', такий в цьому фільмі приємний вайб, та й розповідають про красиві речі, ще й восени, тому він прям мені асоціюється з тобою🎓",
  },
  {
    name: (
      <>
        song/
        <br />
        album
      </>
    ),
    image: "/assets/golden-brown.jpg",
    text: "Golden brown - пісня, яка у мене асоціюється тільки з тобою, я якраз почав її слухати як ми почали зустрічатись і кожен раз коли я її вмикаю - я одразу думаю про тебе. Звісно частково через те, що вона у всяких милих рілзиках грала, але саме звучання як мені здається дуже підходить під твою персону🎶",
  },
  {
    name: "book",
    image: "/assets/poetry.jpg",
    text: "Збірник віршів Ліни Костенко, бо як і її вірші, ти така ж різнобічна і вміщуєш в собі неймовірну кількість інтересів і думок (так як я мало читав, то це все, до чого я додумався...)🪶",
  },
];

function App() {
  const [activeCardIdx, setActiveCardIdx] = useState<number | null>(null);
  const [dynamicText, setDynamicText] = useState(
    "Made for my sweetest girl whom I love so much❤️",
  );

  const handleCardClick = (idx: number, text: string) => {
    if (activeCardIdx === idx) {
      setActiveCardIdx(null);
      setDynamicText("Made for my sweetest girl whom I love so much❤️");
    } else {
      setActiveCardIdx(idx);
      setDynamicText(text);
    }
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gray-50">
      <div className="max-w-[600px] mx-auto">
        <h2 className="text-3xl font-bold text-black text-center mb-8">
          ✨Things associated with my beautiful girlfriend✨
        </h2>
        <div className="grid grid-cols-3 gap-4 w-full max-w-4xl">
          {columns.map((item, idx) => (
            <div
              key={idx}
              className="relative w-full aspect-square cursor-pointer [perspective:1000px]"
              onClick={() => handleCardClick(idx, item.text)}
            >
              <div
                className={`w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
                  activeCardIdx === idx ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-white border border-gray-400 [backface-visibility:hidden]">
                  <span className="text-xl text-center text-gray-800 font-serif px-2">
                    {item.name}
                  </span>
                </div>
                <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover border border-gray-400"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-xl text-gray-800 transition-all duration-300 text-center">
          {dynamicText}
        </div>
      </div>
    </section>
  );
}

export default App;
