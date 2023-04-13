import { useEffect, useState } from "react";
import axios from 'axios';

export const useFetch = (url) => {
const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
axios
.get(url)
.then((response) => {
setData(response.data);
setIsLoading(false);
})
.catch((error) => {
console.log(error);
setIsLoading(false);
});
}, [url]);

return { data, isLoading };
};