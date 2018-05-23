// class or function based? we dont need to make any use of component state. just props come in, we render.
// therefore, just functional component. 
import _ from 'lodash'; // _ = lodash
import React from 'react'; 
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'; 

function average(data) {
  return _.round(_.sum(data)/data.length); 
}

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />  
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div> 
  );
}