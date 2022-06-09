import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import LapBtn from "./LapBtn";
import msToTime from "./msToTime";
import ResetBtn from "./ResetBtn";
import StartBtn from "./StartBtn";
import StopBtn from "./StopBtn";
import TimerClock from "./TImerClock";
import ShowLaps from "./ShowLaps";

export default function Stopwatch() {
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        setTimer((time) => time + 10);
      }, 10);
      return () => clearInterval(interval);
    }
  }, [running]);

  function startTimer() {
    setRunning(true);
    setIsPaused(false);
  }
  function stopTimer() {
    setRunning(false);
    setIsPaused(true);
  }
  function lapTimer() {
    setLaps((lap) => [...lap, msToTime(timer)]);
    setTimer(0);
  }
  function resetTimer() {
    if (isPaused) {
      setLaps([]);
      setRunning(false);
      setTimer(0);
    }
  }

  return (
    <View>
      <TimerClock timer={timer}></TimerClock>
      <View style={styles.Btns}>
        <StartBtn fn={startTimer}></StartBtn>
        <LapBtn fn={lapTimer}></LapBtn>
        <StopBtn fn={stopTimer}></StopBtn>
        <ResetBtn fn={resetTimer}></ResetBtn>
      </View>
      {laps.length > 0 && <ShowLaps laps={laps}></ShowLaps>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  Btns: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
