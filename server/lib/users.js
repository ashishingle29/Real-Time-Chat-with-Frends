const users = [
    {
      id: "1",
      name: "Ashish Ingle",
      email: "dnedry@ingen.net",
      avatar:
        "https://cdn.vox-cdn.com/thumbor/4oha2z_P13Nc_Z_JUt1qpt133yw=/0x0:1440x653/920x613/filters:focal(314x95:544x325):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60017631/dennis_nedry_1440.0.jpg",
    },
    {
      id: "2",
      name: "Vidhi Pagal",
      email: "jhammond@ingen.net",
      avatar:
        "https://openpsychometrics.org/tests/characters/test-resources/pics/JP/4.jpg",
    }
  ];
  
  function findUserById(userId) {
    return users.find((user) => user.id === userId);
  }
  
  module.exports = { users, findUserById };