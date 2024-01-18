import axios from "axios";

        export const PostRequest = async (api,postData) => {
            try {
              const response = await axios.post(api, postData, {
                headers: {
                  'Content-Type': 'application/json',
                  // Add any other headers if needed
                },
              });
        
              console.log('Response Data:', response.data);
              // Handle the response data as needed
            } catch (error) {
              console.error('Error during POST request:', error);
              // Handle error cases
            }
          };
    
