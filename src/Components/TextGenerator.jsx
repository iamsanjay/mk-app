import {useState} from "react";
import {Container, Row, Col, Form, Button, Alert} from "react-bootstrap";
import GeneratedTextResponse from "./GeneratedTextResponse.jsx";
import {text_generator} from "../Service/TextGeneratorService.js";
export default function TextGenerator(){
	
	const [prefix, setPrefix] = useState();
	const [suffix, setSuffix] = useState();
	const [file, setFile] = useState();
	const [error, setError] = useState();
	const [text, setText] = useState();

	const handleSubmit = (e) => {
		setError();
		e.preventDefault();
		if(!prefix){
			setError("Prefix cannot be empty.");
			return;
		}
		if(!suffix){
			setError("Suffix cannot be empty.");
			return;
		}
		if(!file){
			setError("File cannot be empty.");
			return;
		}
		console.log(prefix, suffix, file);
		
		const fileFormData = new FormData();
		fileFormData.append("prefix", prefix);
		fileFormData.append("suffix", suffix);
		fileFormData.append("file", file);
		
		text_generator(fileFormData)
			.then(results => {
				console.log(results);
				setText(results);
			})
			.catch(error => setError(error));
	}
	return(
		<Row>
		<Row>
			<Col xs={4} style={{"padding":"20px"}} className="mx-auto">
				{ error && <Alert variant="danger">{error}</Alert>}
				<Form onSubmit={handleSubmit}>
        			<Form.Group>
            			<Form.Label>Prefix</Form.Label>
            			<Form.Control type="text" placeholder="Enter prefix" name="prefix" onChange={(e) => setPrefix(e.target.value)}/>
        			</Form.Group>
        			<Form.Group className="mt-3">
        				<Form.Label>Suffix</Form.Label>
            			<Form.Control type="text" placeholder="Enter suffix" name="suffix" onChange={(e) => setSuffix(e.target.value)}/>
        			</Form.Group>
        			<Form.Group className="mt-3">
        				<Form.Label>Upload File</Form.Label>
        				<Form.Control type="file" name="file" onChange={(e) => setFile(e.target.files[0])}/>
        			</Form.Group>
        			<Button variant="primary" type="submit" className="mt-3">
    					Submit
  					</Button>
      			</Form>
			</Col>
		</Row>
		<Row>
			<GeneratedTextResponse value={text}/>
		</Row>
		</Row>

	);
}