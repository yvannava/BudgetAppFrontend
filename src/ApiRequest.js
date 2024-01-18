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

          export const GetAllRequest = async (api, setData) => {
            try {
              const response = await axios.get(api);
              setData(response.data);
            } catch (error) {
              console.error('Error fetching data:', error);
              // You might want to handle the error or log it appropriately
            }
          };