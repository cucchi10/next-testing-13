import { API_POST } from "@/utils/constans";
const UseComments = () => {

  const getComments = (id) => {
    return fetch(`${API_POST}/${id}/comments`)
      .then(res => res.json())
      .then(response => {
        return response
      })
  };

  return {
    getComments,
  };
};

export default UseComments;

// {
//   body:"laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//   email:"Eliseo@gardner.biz"
//   id:1
//   name:"id labore ex et quam laborum"
//   postId:1
// }