import {Fragment} from "react";
export default function GeneratedTextResponse({value}){
	if(!value){
		return;
	}
	return(
	<Fragment>
		<hr/>
		<h1>Generated Text</h1>
		<p>{value}</p>
	</Fragment>
	)
}