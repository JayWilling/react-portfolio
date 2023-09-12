// Instrument Feedback
import HomeScreen from "./projects/InstrumentFeedbackSystem/HomeScreen.png";
import PerformanceFeedback from "./projects/InstrumentFeedbackSystem/PerformanceFeedbackScreen.png";
import PlayScreen from "./projects/InstrumentFeedbackSystem/PlayScreen.png";
import ReviewScreen from "./projects/InstrumentFeedbackSystem/ReviewScreen.png";

// On-Time Table
import StartScreen from "./projects/OnTimeTable/StartupScreen.png"
import Periods from "./projects/OnTimeTable/Periods.png";
import Teachers from "./projects/OnTimeTable/Teachers.png";
import Timetable from "./projects/OnTimeTable/Timetable.png";

// Puzzle Box
import MazePuzzle from "./projects/PuzzleBox/MazeSide.jpg";
import SnakePuzzle from "./projects/PuzzleBox/SnakeSide.jpg";
import TiltPuzzle from "./projects/PuzzleBox/TiltSide.jpg";
import PuzzleInstructions from "./projects/PuzzleBox/InstructionSide.jpg";
import ButtonPuzzle from "./projects/PuzzleBox/ButtonMashSide.jpg";

// Satellite Image LRP
import ExpectedLRPOutput from "./projects/SatelliteImageLRP/ExpectedLRPPrediction.png";
import LRPOutput from "./projects/SatelliteImageLRP/SampleLRPPrediction.png";

// Novulis
import NovulisLogo from "./projects/Novulis/NovulisLogo.png";
import NovulisBook from "./projects/Novulis/BookView.png";
import NovulisHome from "./projects/Novulis/HomePage.png";
import NovulisShip from "./projects/Novulis/NewShip.png";

// Hoarder
//  > ? No clue where it is

// Vehicle and Numberplate Recognition
//      Need to re-run and gather screenshots, performance was not great for OCR

// Note System
import NoteSystemInstructions from "./projects/NoteSystem/Instructions.png";
import NoteSystemStar from "./projects/NoteSystem/Star.png";
import NoteSystemOrbit from "./projects/NoteSystem/Orbit1.png";
import NoteSystemPlanet from "./projects/NoteSystem/Planet.png";
import NoteSystemMoons from "./projects/NoteSystem/Moons.png";

// Terrain Generation
//      Start it up and get some pictures

// Mazes
//      Generator included, but will only regenerate and show the initial path
//      which defines the optimal route to the finish. Determine why the other
//      pathings don't show
//      

// Define Image collections for ease of use
const InstrumentFeedback = [HomeScreen, PerformanceFeedback, PlayScreen, ReviewScreen];
const OnTimeTable = [StartScreen, Timetable, Periods, Teachers];
const Novulis = ["https://www.youtube.com/watch?v=o5MVq8ai-Nk", NovulisLogo, NovulisHome, NovulisShip, NovulisBook];
const PuzzleBox = [MazePuzzle, SnakePuzzle, TiltPuzzle, PuzzleInstructions, ButtonPuzzle];
const SatelliteLRP = [ExpectedLRPOutput, LRPOutput];
const NoteSystem = [NoteSystemInstructions, NoteSystemStar, NoteSystemOrbit, NoteSystemPlanet, NoteSystemMoons];

// Export Image Collections
export {InstrumentFeedback, OnTimeTable, Novulis, PuzzleBox, SatelliteLRP, NoteSystem};