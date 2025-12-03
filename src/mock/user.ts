export default function () {
  return [
    {
      url: "/users/me",
      method: "get",
      timeout: 500,
      response: () => {
        return {
          nickname: "이준희",
          email: "example@daum.net",
        }
      }
    },
  ]
}