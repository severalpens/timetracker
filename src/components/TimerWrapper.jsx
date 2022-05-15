import Page from './page/Page';
import Timer from './timer/Timer'
import {  useState } from 'react';


export default function TimerWrapper() {
    return (
      <Timer  cType={"task"} pType={"project"}/>
    )
}
