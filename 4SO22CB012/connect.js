import axios from "axios";

const getreg = async ()=>{
    try{
        const response = await axios.post('http://20.244.56.144/evaluation-service/register', {
            headers:{
                "email": "deepak2482004@gmail.com",
                "name": "Deepak D",
                "mobileNo":"8762781063",
                "githubUsername": "deepakd28",
                "rollNo": "4SO22CB012",
                "collegeName":"St Joseph Engineering Collegea",
                "accessCode": "KjJAxP"
            }
        }

        )
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
getreg();