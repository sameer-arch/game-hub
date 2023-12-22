import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "9fc1fd9e125d498ea219ce6a6445700a",
	},
});
