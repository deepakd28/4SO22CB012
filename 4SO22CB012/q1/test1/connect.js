import axios from "axios";

const getreg = async ()=>{
    try{
        const response = await axios.get('http://20.244.56.144/evaluation-service/stocks', {
            headers:{
                "token_type": "Bearer",
    "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ2ODczODM5LCJpYXQiOjE3NDY4NzM1MzksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImE2MmYxNjliLWRjMTMtNDY1Mi1hNGE4LWJlZGE4NGE0MzMyOSIsInN1YiI6IjIyazEyLmRlZXBha0BzamVjLmFjLmluIn0sImVtYWlsIjoiMjJrMTIuZGVlcGFrQHNqZWMuYWMuaW4iLCJuYW1lIjoiZGVlcGFrIiwicm9sbE5vIjoiNHNvMjJjMDEyIiwiYWNjZXNzQ29kZSI6IktqSkF4UCIsImNsaWVudElEIjoiYTYyZjE2OWItZGMxMy00NjUyLWE0YTgtYmVkYTg0YTQzMzI5IiwiY2xpZW50U2VjcmV0IjoiVGtHQXhxQnlBYVJ0dmtGZyJ9.9-3tKfDTz-0Wij24OTNPwfiuV05B88qHkdP6nUclku4"
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