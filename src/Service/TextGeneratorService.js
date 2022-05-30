export function text_generator(fileFormData){
	return fetch("/text", {
    	method: 'POST',
    	headers: {
			'accept': 'application/json'
		},
    	body: fileFormData
  	})
	.then(response => response.text());
	console.log("Insisde the text_generator", fileFormData);
}